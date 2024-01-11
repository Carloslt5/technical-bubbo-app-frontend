import React, { type ReactNode } from 'react'
import { type StyleProp, StyleSheet, type ViewStyle, Pressable } from 'react-native'
import theme from './theme'

interface StyledButtonProps {
  children: ReactNode
  button?: 'primary'
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  button: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    backgroundColor: theme.colors.blue500,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
})

const StyledButton = ({ children, button, style, ...props }: StyledButtonProps) => {
  const buttonStyle = [styles.button, style]

  return (
    <Pressable
      style={buttonStyle}
      {...props}
    >
      {children}
    </Pressable>
  )
}

export default StyledButton
