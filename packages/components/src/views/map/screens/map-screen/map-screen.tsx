import React from 'react'
// import { useStores } from 'stores'
import { NearbyReport } from 'views/map'
import { Map } from 'views/shared'

export const MapScreen = () => {
  // const { authStore, playerStore } = useStores()
  // const geo = authStore.geo

  // Data
  // useEffect(() => {
  //   if (geo) {
  //     // fetchNearbyPlayers()
  //     playerStore.fetchNearbyReport()
  //   }
  // }, [geo])
  return (
    <>
      <NearbyReport />
      <Map />
    </>
  )
}
