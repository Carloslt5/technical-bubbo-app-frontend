import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const HomePage = () => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home page</Text>
    </SafeAreaView>
  )
}

export default HomePage
