import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import store from '../store'

const LayoutMain = () => {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  )
}

export default LayoutMain
