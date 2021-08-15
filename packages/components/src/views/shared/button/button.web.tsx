import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from '../text/text'
import { viewPresets, textPresets, disabledViewPresets } from './button.presets'
import { ButtonProps } from './button.props'
import { flatten } from 'ramda'
import { palette } from 'views/theme/palette'

const DEFAULT_ACTIVE_OPACITY: number = 0.6

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = 'primary',
    tx,
    text,
    withIcon,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props

  const viewStyle = viewPresets[preset] || viewPresets.primary
  const disabledViewStyle =
    props.disabled &&
    (disabledViewPresets[preset] || disabledViewPresets.primary)
  const iconStyle = props.icon && (viewPresets['icon'] || viewPresets.icon)
  const viewStyles = flatten([
    viewStyle,
    disabledViewStyle,
    iconStyle,
    styleOverride,
  ])

  const textStyle = textPresets[preset] || textPresets.primary
  const textStyles = flatten([textStyle, textStyleOverride])

  const content = children || <Text tx={tx} text={text} style={textStyles} />

  if (withIcon) {
    return (
      <TouchableOpacity
        activeOpacity={DEFAULT_ACTIVE_OPACITY}
        style={viewStyles}
        {...rest}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text
            preset='label'
            tx={tx}
            text={text}
            style={{
              ...textStyles,
              marginLeft: 0,
              paddingLeft: 10,
              fontSize: 18,
              lineHeight: 24,
              letterSpacing: 1,
            }}
          />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={viewStyles} {...rest}>
      {content}
    </TouchableOpacity>
  )
}
