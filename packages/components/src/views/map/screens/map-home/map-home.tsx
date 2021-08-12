import React from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { MapIdle } from '../map-idle'
import { RequestActive } from 'views/service'
import { translate } from 'i18n'

export const MapHome: React.FC<{}> = observer(() => {
  // State
  const { authStore, serviceStore } = useStores()
  const acGeo = 'Arcade City' // ?? authStore.acGeo
  const hasActiveServiceRequest = serviceStore.hasActiveServiceRequest

  // Nav
  const title = hasActiveServiceRequest ? translate('service.yourRequest') : acGeo
  const { setOptions } = useNavigation()
  setOptions({ title })

  return hasActiveServiceRequest ? <RequestActive key={authStore?.locale} /> : <MapIdle key={authStore?.locale} />
})
