import { ViewStyle } from 'react-native'
import { color, spacing } from '../../../theme'

export const CONTAINER: ViewStyle = {
    paddingBottom: spacing[7],
    paddingTop: spacing[5],
}

export const DIVIDER: ViewStyle = {
    backgroundColor: color.line,
    height: 1,
    marginBottom: spacing[2],
    marginTop: spacing[4],
    width: spacing[4],
}

export const LONGDIVIDER: ViewStyle = {
    backgroundColor: color.line,
    height: 1,
    marginVertical: spacing[1],
    width: '100%',
}
