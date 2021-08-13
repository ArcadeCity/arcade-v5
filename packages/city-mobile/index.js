import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

const { CityApp } = require('@arcadecity/components/src/components/CityApp')
require('@arcadecity/components/shim')

AppRegistry.registerComponent(appName, () => CityApp)
