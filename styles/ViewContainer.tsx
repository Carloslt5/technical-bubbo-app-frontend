import React, { type ReactNode } from 'react'
import { type StyleProp, StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native'

interface StyledViewProps extends ViewProps {
  children: ReactNode
  justifyContent?: 'center' | 'start'
  flexDirection?: 'row'
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  flexContainer: {
    width: '100%',
    gap: 10,
    paddingHorizontal: 10,
  },
  contentCenter: {
    justifyContent: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const ViewContainer = ({
  children,
  flexDirection,
  justifyContent,
  style,
  ...props
}: StyledViewProps) => {
  const viewStyle = [
    styles.flexContainer,
    flexDirection === 'row' && styles.flexDirectionRow,
    justifyContent === 'center' && styles.contentCenter,
    style,
  ]

  return (
    <View
      style={viewStyle}
      {...props}
    >
      {children}
    </View>
  )
}

export default ViewContainer
