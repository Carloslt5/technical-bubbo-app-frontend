import React, { type ReactNode } from 'react'
import { StyleSheet, View, type ViewProps } from 'react-native'

interface StyledViewProps extends ViewProps {
  children: ReactNode
}

const styles = StyleSheet.create({
  flexContainer: {
    width: '100%',
    gap: 10,
    paddingHorizontal: 10,
    paddingBottom: 70,
  },
})

const MainContainer = ({ children, style, ...props }: StyledViewProps) => {
  const viewStyle = [styles.flexContainer, style]

  return (
    <View
      style={viewStyle}
      {...props}
    >
      {children}
    </View>
  )
}

export default MainContainer
