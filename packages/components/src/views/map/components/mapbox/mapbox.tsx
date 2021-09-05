import * as React from 'react'
import { View } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import * as MapStyles from './mapbox.styles'
import { MapboxProps, MapboxState } from './mapbox.props' // Coordinate,
// import { UserLocation } from './user-location'
import { PlayerLayer } from './player-layer'
import { GuildLayer } from './guild-layer'
import { RouteLayer } from './route-layer'
import { PickupDropLocationLayer } from './pickupdrop-layer'

export class Mapbox extends React.Component<MapboxProps, MapboxState> {
  map: MapboxGL.MapView | null

  constructor(props: MapboxProps) {
    super(props)
    this.map = null
    this.state = {
      styleURL: MapStyles.styleURLs.blank,
      onceLocation: [-90, 30],
    }
  }

  async componentDidMount() {
    // If user is logged in, ensure we switch to the design with street names etc.
    const { userAuthed } = this.props
    if (userAuthed) {
      this.setState({ styleURL: MapStyles.styleURLs.main })
    }
  }

  // flyTo(coordinates: Coordinate, duration: number) {
  //   this.map?.flyTo(coordinates, duration)
  // }

  // moveMap(pickup: any, drop: any) {
  //   this.map?.fitBounds(pickup, drop, [175, 40, 175, 40], 1000)
  // }

  // moveMapForRider(pickup: any, drop: any) {
  //   this.map?.fitBounds(pickup, drop, [175, 100, 175, 100], 1000)
  // }

  // setCamera(config: any) {
  //   this.map?.setCamera(config)
  // }

  // moveCamera(coordeinates) {
  //   // this.camera.moveTo([coordeinates.latitude, coordeinates.longitude], 200)
  // }

  render() {
    const {
      guildShape,
      playerShape,
      setSelectedGuild,
      setSelectedPlayer,
      showMapOverlayFor,
      userAuthed,
      // onceLocation,
      onCenterLocationChanged,
      onCenterLocationChanging,
      pickupDropShape,
      routeShape,
      setCurrentSelectionOverlay,
      onDidFinishLoadingMap,
    } = this.props

    return (
      <MapboxGL.MapView
        // showUserLocation ={true}
        // compassEnabled={true}
        // centerCoordinate={onceLocation}
        userTrackingMode={MapboxGL.UserTrackingModes.FollowWithHeading}
        rotateEnabled={true}
        pitchEnabled={false}
        style={[MapStyles.map, this.props.style]}
        // zoomLevel={this.props.zoomLevel}
        // minZoomLevel={this.props.minZoomLevel}
        // maxZoomLevel={this.props.maxZoomLevel}
        styleURL={this.state.styleURL}
        ref={(r) => {
          this.map = r
        }}
        onRegionDidChange={() => {
          if (onCenterLocationChanged) {
            onCenterLocationChanged(this.map)
          }
        }}
        onRegionIsChanging={() => {
          if (onCenterLocationChanging) {
            onCenterLocationChanging(this.map)
          }
        }}
        onDidFinishLoadingMap={() => {
          if (onDidFinishLoadingMap) {
            onDidFinishLoadingMap(this.map)
          }
        }}
      >
        {/* <UserLocation /> */}

        {guildShape ? (
          <GuildLayer
            guildShape={guildShape}
            setSelectedGuild={setSelectedGuild}
            showMapOverlayFor={showMapOverlayFor}
            userAuthed={userAuthed}
          />
        ) : (
          <View />
        )}

        {userAuthed ? (
          <PlayerLayer
            playerShape={playerShape}
            setSelectedPlayer={setSelectedPlayer}
            showMapOverlayFor={showMapOverlayFor}
          />
        ) : (
          <View />
        )}

        {routeShape ? <RouteLayer routeShape={routeShape} /> : <View />}

        {pickupDropShape ? (
          <PickupDropLocationLayer
            pickupDropShape={pickupDropShape}
            showMapOverlayFor={showMapOverlayFor}
            setCurrentSelectionOverlay={setCurrentSelectionOverlay}
          />
        ) : (
          <View />
        )}
      </MapboxGL.MapView>
    )
  }
}
