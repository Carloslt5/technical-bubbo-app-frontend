import React, { type ReactNode } from 'react'
import { View, type StyleProp, type ViewProps, StyleSheet, Platform } from 'react-native'
import theme from './theme'

interface StyledFormProps extends ViewProps {
  children: ReactNode
  style?: StyleProp<ViewProps>
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    rowGap: 10,
    ...Platform.select({
      web: {
        width: '100%',
        padding: 10,
        maxWidth: 500,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.blue500,
      },
    }),
  },
})

const StyledForm = ({ children, style, ...props }: StyledFormProps) => {
  const formStyle = [styles.form, style]
  return (
    <View
      style={formStyle}
      {...props}
    >
      {children}
    </View>
  )
}

export default StyledForm
