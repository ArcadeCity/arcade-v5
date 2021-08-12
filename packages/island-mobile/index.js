import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

const { IslandApp } = require('@arcadecity/components/src/components/IslandApp')

AppRegistry.registerComponent(appName, () => IslandApp)
