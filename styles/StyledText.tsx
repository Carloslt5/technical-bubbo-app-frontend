import React, { type ReactNode } from 'react'
import { Text, type StyleProp, StyleSheet, type TextStyle } from 'react-native'
import theme from './theme'

interface StyledTextProps {
  children: ReactNode
  textAlign?: 'center'
  color?: 'textPrimary' | 'textSecondary' | 'textWhite' | 'textError'
  fontSize?: 'subheading' | 'small' | 'h1'
  fontWeight?: 'normal' | 'bold'
  bgColor?: boolean
  style?: StyleProp<TextStyle>
  language?: string
  textDecoration?: 'underline'
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
  textAlign: {
    textAlign: 'center',
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  colorError: {
    color: theme.colors.error,
    marginBottom: 10,
  },
  fontSizeTitle: {
    fontSize: theme.fontSizes.h1,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeSmall: {
    fontSize: theme.fontSizes.small,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textDecoration: {
    textDecorationLine: 'underline',
  },
})

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  textAlign,
  textDecoration,
  style,
  ...props
}: StyledTextProps) => {
  const textStyle = [
    styles.text,
    color === 'textPrimary' && styles.colorPrimary,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textWhite' && styles.colorWhite,
    color === 'textError' && styles.colorError,
    textAlign === 'center' && styles.textAlign,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'small' && styles.fontSizeSmall,
    fontSize === 'h1' && styles.fontSizeTitle,
    fontWeight === 'bold' && styles.fontWeightBold,
    textDecoration === 'underline' && styles.textDecoration,
    style,
  ]

  return (
    <Text
      style={textStyle}
      {...props}
    >
      {children}
    </Text>
  )
}

export default StyledText
