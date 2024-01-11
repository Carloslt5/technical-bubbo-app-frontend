import React from 'react'
import { type StyleProp, StyleSheet, TextInput, type TextInputProps } from 'react-native'
import theme from './theme'

interface StyledInputProps extends TextInputProps {
  style?: StyleProp<TextInputProps>
  error?: boolean
  onSearch?: () => void
}

const styles = StyleSheet.create({
  inputText: {
    borderColor: theme.colors.blue900,
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
  },
})

export const StyledInput = ({ onSearch, error, style, ...props }: StyledInputProps) => {
  const inputStyle = [styles.inputText, style]

  return (
    <TextInput
      style={inputStyle}
      onSubmitEditing={onSearch}
      {...props}
    />
  )
}
