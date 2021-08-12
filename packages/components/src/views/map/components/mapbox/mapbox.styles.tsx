import { Platform, ViewStyle, StyleProp } from 'react-native'
// import MapboxGL from '@react-native-mapbox-gl/maps'
import { images, palette } from '../../../theme'
import { SymbolLayerStyle } from '@react-native-mapbox-gl/maps'

const BEACONCOLOR = '#5B20F2'

export const mapImages = {
    Rider: images.rider,
    Driver: images.car,
    Biker: images.bikeOnMapWhite,
    guild: images.guildsActive,
    pickup: images.pickup,
    drop: images.drop,
    // assets: [images.rider, images.pickup, images.drop],
}

export const styleURLs = {
    blank: 'mapbox://styles/aclions/cjoo2gldl3bio2rmktwhcy0qh',
    main: 'mapbox://styles/aclions/cjeai04xo08k02rozqsi9di5a',
}

export const map: ViewStyle = {
    flex: 1,
    height: '100%',
    width: '100%',
}

export const layerStyles = {
    profileImage: {
        // iconImage: 'Rider',
        iconImage: '{icon}',
        iconSize: Platform.OS === 'ios' ? 1 : 1,
        iconAllowOverlap: true,
    },
    pickupDropImage: {
        iconImage: '{icon}',
        iconSize: Platform.OS === 'ios' ? 42 : 42,
        iconAllowOverlap: true,
    },
    singlePoint: {
        circleColor: BEACONCOLOR,
        circleOpacity: 0.84,
        circleStrokeWidth: 0,
        circleStrokeColor: 'white',
        circleRadius: 5,
        circlePitchAlignment: 'map',
    },

    clusteredPointsGuilds: {
        circlePitchAlignment: 'map',
        circleColor: palette.minsk,
        circleOpacity: 0.84,
        circleStrokeWidth: 0,
        circleStrokeColor: 'white',
        circleRadius: ['step', ['get', 'point_count'], 15, 100, 20, 750, 30],
        // circleRadius: MapboxGL.StyleSheet.source(
        //   [[0, 15], [100, 20], [750, 30]],
        //   'point_count',
        //   MapboxGL.InterpolationMode.Exponential
        // )
    },

    clusteredPoints: {
        circlePitchAlignment: 'map',
        circleColor: BEACONCOLOR,
        circleOpacity: 0.84,
        circleStrokeWidth: 0,
        circleStrokeColor: 'white',
        circleRadius: ['step', ['get', 'point_count'], 15, 100, 20, 750, 30],
        // circleRadius: MapboxGL.StyleSheet.source(
        //   [[0, 15], [100, 20], [750, 30]],
        //   'point_count',
        //   MapboxGL.InterpolationMode.Exponential
        // )
    } as StyleProp<SymbolLayerStyle>,

    clusterCount: {
        textField: '{point_count}',
        textSize: 12,
        textColor: 'white',
        textPitchAlignment: 'map',
    } as StyleProp<SymbolLayerStyle>,
}

export const mapLayers = {
    route: {
        lineColor: '#AE30FF',
        lineWidth: 4,
        lineOpacity: 0.84,
        // lineJoin: MapboxGL.LineJoin.Round,
        // lineCap: MapboxGL.LineCap.Round
    },
    routeEndsFade: {
        circleRadius: 10,
        circleBlur: 1,
        // circleColor: MapboxGL.StyleSheet.source(
        //   [['start', palette.electricViolet], ['end', palette.electricIndigo]],
        //   'subType',
        //   MapboxGL.InterpolationMode.Categorical
        // )
    },
    routeEnds: {
        circleRadius: 3,
        // circleColor: MapboxGL.StyleSheet.source(
        //   [['start', palette.electricViolet], ['end', palette.electricIndigo]],
        //   'subType',
        //   MapboxGL.InterpolationMode.Categorical
        // )
    },
    driverCar: {
        iconImage: images.car,
        iconAllowOverlap: true,
        iconSize: 1,
        // iconRotate: MapboxGL.StyleSheet.identity('rotation')
    },
    riderIcon: {
        iconImage: images.rider,
        iconAllowOverlap: true,
        iconSize: 1,
        // iconRotate: MapboxGL.StyleSheet.identity('rotation')
    },
    bikerIcon: {
        iconImage: images.bikeOnMapWhite,
        iconAllowOverlap: true,
        iconSize: 1,
        // iconRotate: MapboxGL.StyleSheet.identity('rotation')
    },
    guildIcon: {
        iconImage: images.guildIcon,
        iconAllowOverlap: true,
        iconSize: 1,
        // iconRotate: MapboxGL.StyleSheet.identity('rotation')
    },
    userLocationInnerCircle: {
        circleOpacity: 0.8,
        circleColor: palette.electricViolet,
    },
    userLocationInnerCirclePulse: {
        circleColor: palette.electricViolet,
    },
    userLocationOuterCircle: {
        circleOpacity: 0.2,
        circleColor: palette.electricViolet,
    },
}
