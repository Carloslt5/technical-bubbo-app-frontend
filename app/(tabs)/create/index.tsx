import { View, StyleSheet } from 'react-native'
import React from 'react'
import BookForm from '../../../components/BookForm'

const NewBookPage = () => {
  return (
    <View style={styles.container}>
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
