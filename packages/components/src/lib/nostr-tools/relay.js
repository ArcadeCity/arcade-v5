import 'websocket-polyfill'

import { verifySignature } from './event'

export function normalizeRelayURL(url) {
  let [host, ...qs] = url.split('?')
  if (host.slice(0, 4) === 'http') host = 'ws' + host.slice(4)
  if (host.slice(0, 2) !== 'ws') host = 'wss://' + host
  if (host.length && host[host.length - 1] === '/') host = host.slice(0, -1)
  return [host, ...qs].join('?')
}

export function relayConnect(url, onNotice) {
  url = normalizeRelayURL(url)

  var ws, resolveOpen, untilOpen
  var openSubs = {}
  let attemptNumber = 1
  let nextAttemptSeconds = 1

  function resetOpenState() {
    untilOpen = new Promise((resolve) => {
      resolveOpen = resolve
    })
  }

  var channels = {}

  function connect() {
    ws = new WebSocket(url)

    ws.onopen = () => {
      console.log('connected to', url)
      resolveOpen()

      // restablish old subscriptions
      for (let channel in openSubs) {
        let filters = openSubs[channel]
        let cb = channels[channel]
        sub({ cb, filter: filters }, channel)
      }
    }
    ws.onerror = () => {
      console.log('error connecting to relay', url)
    }
    ws.onclose = () => {
      resetOpenState()
      attemptNumber++
      nextAttemptSeconds += attemptNumber
      console.log(
        `relay ${url} connection closed. reconnecting in ${nextAttemptSeconds} seconds.`
      )
      setTimeout(async () => {
        try {
          connect()
        } catch (err) {}
      }, nextAttemptSeconds * 1000)
    }

    ws.onmessage = async (e) => {
      var data
      try {
        data = JSON.parse(e.data)
      } catch (err) {
        data = e.data
      }

      if (data.length > 1) {
        if (data[0] === 'NOTICE') {
          if (data.length < 2) return

          console.log('message from relay ' + url + ': ' + data[1])
          onNotice(data[1])
          return
        }

        if (data[0] === 'EVENT') {
          if (data.length < 3) return

          let channel = data[1]
          let event = data[2]

          if (await verifySignature(event)) {
            if (channels[channel]) {
              channels[channel](event)
            }
          } else {
            console.warn('got event with invalid signature from ' + url, event)
          }
          return
        }
      }
    }
  }

  resetOpenState()

  try {
    connect()
  } catch (err) {}

  async function trySend(params) {
    let msg = JSON.stringify(params)

    await untilOpen
    ws.send(msg)
  }

  const sub = ({ cb, filter }, channel = Math.random().toString().slice(2)) => {
    var filters = []
    if (Array.isArray(filter)) {
      filters = filter
    } else {
      filters.push(filter)
    }

    trySend(['REQ', channel, ...filters])
    channels[channel] = cb
    openSubs[channel] = filters

    const activeCallback = cb
    const activeFilters = filters

    return {
      sub: ({ cb = activeCallback, filter = activeFilters }) =>
        sub({ cb, filter }, channel),
      unsub: () => {
        delete openSubs[channel]
        delete channels[channel]
        trySend(['CLOSE', channel])
      },
    }
  }

  return {
    url,
    sub,
    async publish(event, statusCallback = (status) => {}) {
      try {
        await trySend(['EVENT', event])
        statusCallback(0)
        let { unsub } = relay.sub({
          cb: () => {
            statusCallback(1)
          },
          filter: { id: event.id },
        })
        setTimeout(unsub, 5000)
      } catch (err) {
        statusCallback(-1)
      }
    },
    close() {
      ws.close()
    },
    get status() {
      return ws.readyState
    },
  }
}
