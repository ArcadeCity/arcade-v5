import { display } from 'lib'
import { ServiceRequest } from 'stores/service-store'
import { Api } from './api'
import { ConfirmServiceRequestPayload } from './api.types'

/**
 * cancelRequest
 * confirmRequest
 * resolveRequest
 * selectDriver
 * unselectDriver
 */

export class ServiceApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async cancelRequest(request: ServiceRequest) {
    const res = await this.api.callAuthedApi('/service-requests/update', {
      id: request.requestId,
      status: 'cancelled_by_rider',
    })
    display({
      name: 'cancelRequest',
      preview: 'API response',
      value: res,
    })
    return res
  }

  async confirmRequest(request: ServiceRequest) {
    const payload: ConfirmServiceRequestPayload = {
      addresses: request.addresses,
      details: request.details,
      payment_card: request.paymentCard ?? null,
      payment_method: request.paymentMethod,
      status: request.status,
      type: request.type,
      when: request.when,
    }
    display({
      name: 'confirmRequest',
      preview: 'Submitting request to API...',
      value: { payload, request },
    })
    const res = await this.api.callAuthedApi(
      '/service-requests/create',
      payload
    )
    display({
      name: 'confirmRequest',
      preview: 'API response',
      value: res,
    })
    return res
  }

  async resolveRequest(request: ServiceRequest) {
    const res = await this.api.callAuthedApi('/service-requests/update', {
      id: request.requestId,
      status: 'resolved_by_rider',
    })
    display({
      name: 'resolveRequest',
      preview: 'API response',
      value: res,
    })
    return res
  }

  async selectDriver(id: number, request: ServiceRequest) {
    const res = await this.api.callAuthedApi('/service-requests/update', {
      id: request.requestId,
      driver_id: id,
      status: 'claimed',
    })
    display({
      name: 'selectDriver',
      preview: 'API response',
      value: res,
    })
    return res
  }

  async unselectDriver(id: number, request: ServiceRequest) {
    const res = await this.api.callAuthedApi('/service-requests/update', {
      id: request.requestId,
      driver_id: 0,
      status: 'awaiting_drivers',
    })
    display({
      name: 'unselectDriver',
      preview: 'API response',
      value: { res, id },
    })
    return res
  }
}
