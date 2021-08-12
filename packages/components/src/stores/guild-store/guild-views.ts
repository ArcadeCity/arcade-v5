import { toJS, values } from 'mobx'
import { isNil } from 'ramda'
import _ from 'lodash'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { GuildInvite } from './guild-models'
import { log } from 'lib'

/** Return list of guild invites sorted by date, filtered for duplicates */
export function invitesFiltered(self: any) {
  // IF THERE IS A GUILD, SHOW NOTHING
  try {
    if (self.guild) {
      log('returning 1')
      return []
    }
  } catch (e) {
    log('returning 2')
    log(e.message)
    return []
  }

  // IF THERE IS SOME SCREWUP WITH SOMETHING ELSE, ALSO? -- BUT DOESNT THIS ALWAYS RETURN NOTHING FOR GRRR?
  try {
    const invitesArray: any = values(self.invites)
    const sorted: any = invitesArray.sort(function (a: any, b: any) {
      if (a.when > b.when) {
        return 1
      } else {
        return -1
      }
    })

    // console.tron.log('sorted is', sorted)

    // Remove invites we've ignored
    const deignored = sorted.filter((obj: GuildInvite) => {
      return obj.status !== 'ignored'
    })

    // console.tron.log('deignored is', deignored)

    // Remove invites from the same guild
    const deduped = _.uniqBy(deignored, 'guild')

    // Show only the oldest 5 invites
    return deduped.slice(0, 5)
  } catch (e) {
    log('An error with that:')
    log(e.message)
    return []
  }
}

/** Return list of guilds sorted by distance to user */
export function guildsByDistance(self: any) {
  const guildArray: any = values(self.guilds)
  const sorted: any = guildArray.sort(function (a: any, b: any) {
    if (a.distance() > b.distance()) {
      return 1
    } else {
      return -1
    }
  })

  // Show only the closest 5 guilds
  return sorted.slice(0, 5)
}

/**
 * Loop through the object of guilds and return the GeoJson shape needed for
 * Mapbox to render guild icons
 */
export function guildShape(self: any) {
  const guildsObj = toJS(self.guilds)

  let guildsCollection: any = MapboxGL.geoUtils.makeFeatureCollection([])

  Object.keys(guildsObj).forEach(function (key) {
    let guild = guildsObj[key]

    const {
      centerCoords: { lat, lon },
      name,
      mission,
    } = guild

    if (isNil(name) || isNil(mission) || isNil(lat) || isNil(lon)) {
      return
    }

    guildsCollection = MapboxGL.geoUtils.addToFeatureCollection(
      guildsCollection,
      MapboxGL.geoUtils.makeFeature(
        {
          type: 'Point',
          coordinates: [lon, lat],
        },
        {
          id: key,
          icon: 'guild',
          type: 'guild',
        }
      )
    )
  })

  return guildsCollection
}
