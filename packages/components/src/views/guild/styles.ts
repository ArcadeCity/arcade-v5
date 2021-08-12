import { ViewStyle, ImageStyle, TextStyle } from 'react-native'
import { color, spacing } from '../theme'

export const BUTTON_SPACING: ViewStyle = {
    marginTop: 60,
    marginBottom: 20,
    paddingHorizontal: 15,
}

export const BUTTON_DOCK_SPACING: ViewStyle = {
    margin: 10,
}

export const DESCRIP_SPACING: ViewStyle = {
    marginTop: 25,
    marginBottom: 0,
}

export const HEADER_SPACING: ViewStyle = {
    marginTop: 35,
}

export const TEXTFIELD_SPACING: ViewStyle = {
    // marginVertical: 0,
    // paddingVertical: 0,
    // paddingTop: 10,
    // marginBottom: 0
    marginBottom: 8,
    height: 44,
    // height: 50
}

export const MEMBERAVATAR: ViewStyle = {
    marginRight: 8,
}

export const MEMBERSEXTRA: ViewStyle = {
    width: 48,
    height: 48,
    backgroundColor: color.info,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
}

export const SCREEN: ViewStyle = {
    marginTop: 40,
}

export const IMAGE: ImageStyle = {
    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 0,
    width: 300,
    height: 300,
    maxWidth: '90%',
    resizeMode: 'contain',
}

export const ACTION_SPACING: ViewStyle = {
    marginTop: spacing[7],
    marginBottom: 90,
}

export const LABEL: TextStyle = {
    paddingBottom: spacing[4],
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
    marginVertical: spacing[6],
    width: '100%',
}

export const AVATAR: ViewStyle = {
    marginVertical: spacing[4],
}

export const DETAILS: ViewStyle = {
    flex: 1,
    paddingLeft: spacing[4],
    paddingTop: 30,
}

export const MEMBERLIST: ViewStyle = {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: spacing[3],
    paddingBottom: 30,
    width: '100%',
    marginTop: 10,
}

export const USERNAME: TextStyle = {
    marginBottom: 0,
}
