import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export const Mapbox = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  })
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken='pk.eyJ1IjoiYWNsaW9ucyIsImEiOiJja3M5ZGM0eHcwcnI0MnhuenFocjBtNDY3In0.LbWIQ4extcXwNy9k4QWIoQ'
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  )
}

export const styleURLs = {
  blank: 'mapbox://styles/aclions/cjoo2gldl3bio2rmktwhcy0qh',
  main: 'mapbox://styles/aclions/cjeai04xo08k02rozqsi9di5a',
}
