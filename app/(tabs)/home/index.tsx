import React from 'react'
import StyledText from '../../../styles/StyledText'
import MainContainer from '../../../styles/MainContainer'
import { Stack } from 'expo-router'

const HomePage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Home',
          headerTitleAlign: 'center',
        }}
      />
      <MainContainer>
        <StyledText
          fontSize='h1'
          fontWeight='bold'
          textAlign='center'
        >
          Home page
        </StyledText>
      </MainContainer>
    </>
  )
}

export default HomePage
