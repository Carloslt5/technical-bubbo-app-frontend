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
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 'auto',
  },
})

export default NewBookPage
