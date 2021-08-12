import { ViewStyle } from 'react-native'
import { CircleLayerStyle, SymbolLayerStyle } from '@react-native-mapbox-gl/maps'
import { palette } from 'views/theme'

export const CONTAINER: ViewStyle = {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#1c133a',
}

export const BUTTON_CONTAINER: ViewStyle = {
    position: 'absolute',
    bottom: '12%',
    width: '100%',
    paddingHorizontal: 30,
}

export const mapStyles = {
    blank: 'mapbox://styles/aclions/cjoo2gldl3bio2rmktwhcy0qh',
    main: 'mapbox://styles/aclions/cjeai04xo08k02rozqsi9di5a',
}

export const clusterCount: SymbolLayerStyle = {
    textField: '{point_count}',
    textSize: 12,
    textColor: 'white',
    textPitchAlignment: 'map',
}

export const clusteredPointsGuilds: CircleLayerStyle = {
    circlePitchAlignment: 'map',
    circleColor: palette.electricIndigo, // minsk for guilds. these are players for now
    circleOpacity: 0.84,
    circleStrokeWidth: 0,
    circleStrokeColor: 'white',
    circleRadius: ['step', ['get', 'point_count'], 15, 100, 20, 750, 30],
}
