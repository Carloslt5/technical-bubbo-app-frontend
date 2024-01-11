import React, { type ReactNode } from 'react'
import { StyleSheet, Pressable, type PressableProps, type StyleProp } from 'react-native'
import theme from './theme'

interface StyledButtonProps extends PressableProps {
  children: ReactNode
  style?: StyleProp<PressableProps>
  button: 'primary' | 'delete' | 'edit' | 'submit'
}

const styles = StyleSheet.create({
  button: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: theme.colors.blue500,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
  },
  editButton: {
    backgroundColor: theme.colors.blue500,
  },
  submitButton: {
    backgroundColor: theme.colors.blue900,
  },
})

const StyledButton = ({ children, button, style, onPress, ...props }: StyledButtonProps) => {
  const buttonStyle = [
    styles.button,
    button === 'primary' && styles.primaryButton,
    button === 'delete' && styles.deleteButton,
    button === 'edit' && styles.editButton,
    button === 'submit' && styles.submitButton,
    style,
  ]

  return (
    <Pressable
      style={buttonStyle}
      onPress={onPress}
      {...props}
    >
      {children}
    </Pressable>
  )
}

export default StyledButton
