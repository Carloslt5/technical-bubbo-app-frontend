import { View, StyleSheet } from 'react-native'
import React from 'react'
import BookForm from '../../../components/BookForm'
import { Stack } from 'expo-router'

const NewBookPage = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: 'Create',
          headerTitleAlign: 'center',
        }}
      />
      <BookForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default NewBookPage
