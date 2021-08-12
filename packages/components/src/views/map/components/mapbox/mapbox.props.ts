import { ViewStyle } from 'react-native'
// import { GuildStore, LocationStore } from '../../../../stores'

export type Coordinate = [number, number]

export interface GeoJsonFeatureGeometry {
  type: string
  coordinates: Coordinate
}

export interface GeoJsonFeature {
  type: string
  geometry: GeoJsonFeatureGeometry
  properties?: any
}

export interface GeoJson {
  type: string
  features: GeoJsonFeature[]
}

export interface MapboxProps {
  minZoomLevel?: number
  maxZoomLevel?: number
  zoomLevel?: number
  style?: ViewStyle
  userLocation?: Coordinate
  route?: Coordinate[]
  drivers?: GeoJson
  riders?: GeoJson
  bikers?: GeoJson
  guilds?: GeoJson
  // guildStore?: GuildStore
  showMapPlayerOverlay?: any
  setShowMapPlayerOverlay?: any
  userAuthed: boolean
  playerShape?: any
  guildShape?: any
  setSelectedPlayer?: any
  setSelectedGuild?: any
  showMapOverlayFor?: any
  onceLocation?: any
  flyToCenterAfter?: number
  onCenterLocationChanged?: any
  onCenterLocationChanging?: any
  pickupDropShape?: any
  routeShape?: any
  setCurrentSelectionOverlay?: any
  onDidFinishLoadingMap?: any
}

export interface MapboxState {
  location?: any // ?? - Location
  styleURL?: string
  onceLocation?: any
  // showOverlay?: boolean
}

export interface UserLocationProps {
  // locationStore?: LocationStore
}

/**
 * Old
 */
export interface IconShapeResponse {
  drivers?: GeoJson
  riders?: GeoJson
  bikers?: GeoJson
}

export interface NearbyIconsProps {
  drivers?: GeoJson
  riders?: GeoJson
  bikers?: GeoJson
  guilds?: GeoJson
  // guildStore?: GuildStore
}
