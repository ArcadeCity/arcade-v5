import React, { useEffect, useRef } from 'react'
import { GeoCoordinates } from '@here/harp-geoutils'
// import { GeoJsonDataProvider } from '@here/harp-geojson-datasource'
import { MapControls, MapControlsUI } from '@here/harp-map-controls'
import { MapView } from '@here/harp-mapview'
import {
  APIFormat,
  AuthenticationMethod,
  OmvDataSource,
} from '@here/harp-omv-datasource'
import { apiKey, theme, copyrightInfo } from './config'

const initialCoordinates = new GeoCoordinates(0, 13.3848)
const initialZoomLevel = 2.5
const minZoomLevel = 2.5
const maxZoomLevel = 10

// const geoJsonDataProvider = new GeoJsonDataProvider(
//   'offices',
//   new URL('/resources/offices.json', window.location.href)
// )
// const geoJsonDataSource = new OmvDataSource({
//   name: 'offices',
//   dataProvider: geoJsonDataProvider,
// })

const baseMap = new OmvDataSource({
  baseUrl: 'https://vector.hereapi.com/v2/vectortiles/base/mc',
  apiFormat: APIFormat.XYZOMV,
  styleSetName: 'tilezen',
  authenticationCode: apiKey,
  authenticationMethod: {
    method: AuthenticationMethod.QueryString,
    name: 'apikey',
  },
  copyrightInfo,
})

// const styleSet = [
//   {
//     when: '$geometryType == "point"',
//     technique: 'circles',
//     attr: {
//       color: '#01a39c',
//       size: 48,
//       renderOrder: 100,
//     },
//   },
//   {
//     when: '$geometryType == "line"',
//     technique: 'solid-line',
//     attr: {
//       color: '#f8bc02',
//       lineWidth: 10,
//       metricUnit: 'Pixel',
//       renderOrder: 100,
//     },
//   },
// ]

const App = () => {
  const canvasRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    const map = (mapRef.current = new MapView({
      theme,
      canvas: canvasRef.current,
      target: initialCoordinates,
      zoomLevel: initialZoomLevel,
    }))

    map.addDataSource(baseMap)
    // map
    //   .addDataSource(geoJsonDataSource)
    //   .then(() => geoJsonDataSource.setStyleSet(styleSet))

    const onWindowResize = () =>
      map.resize(window.innerWidth, window.innerHeight)
    window.addEventListener('resize', onWindowResize)

    return () => window.removeEventListener('resize', onWindowResize)
  }, [])

  useEffect(() => {
    const controls = new MapControls(mapRef.current)
    const uiControls = new MapControlsUI(controls)

    controls.minZoomLevel = minZoomLevel
    controls.maxZoomLevel = maxZoomLevel

    canvasRef.current.parentElement.appendChild(uiControls.domElement)

    // CopyrightElementHandler.install('copyright-notice').attach(mapRef.current)
  }, [])

  return (
    <div className='app'>
      <canvas ref={canvasRef} />
      {/* <div id='copyright-notice'></div> */}
      {/* <div className='description'>Arcade Nodes</div> */}
    </div>
  )
}

export default App
