// Security precaution
;(window as any).eval = global.eval = (payload: string) => {
  const error = new Error(`This app does not allow window.eval().`)
  Object.assign(error, { payload })

  throw error
}

import { ComponentType } from 'react'
import { AppRegistry } from 'react-native-web'

import './index.css'

const CityApp = () => <></>
// import { CityApp } from '@arcadecity/components/src/components/CityApp'

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent('city', () => AppComponent)
  AppRegistry.runApplication('city', {
    rootTag: document.getElementById('root'),
  })
}

render(CityApp)
