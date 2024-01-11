import React, { type ReactNode } from 'react'
import { type StyleProp, StyleSheet, type TextStyle, View, Platform } from 'react-native'
import theme from './theme'

interface StyledCardProps {
  children: ReactNode
  style?: StyleProp<TextStyle>
}

const styles = StyleSheet.create({
  border: {
    backgroundColor: theme.colors.blue50,
    borderWidth: 1,
    borderColor: theme.colors.blue500,
    borderRadius: 8,
    padding: 10,
    ...Platform.select({
      web: {
        margin: 'auto',
        width: '100%',
      },
    }),
  },
})

const StyledCard = ({ children, style, ...props }: StyledCardProps) => {
  const containerStyle = [styles.border, style]

  return (
    <View
      style={containerStyle}
      {...props}
    >
      {children}
    </View>
  )
}

export default StyledCard
