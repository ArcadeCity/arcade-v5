import 'expo-asset'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

const { CityApp } = require('@arcadecity/components/src/components/CityApp')

AppRegistry.registerComponent(appName, () => CityApp)
