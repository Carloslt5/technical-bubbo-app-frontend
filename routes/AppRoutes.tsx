import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import theme from './../styles/theme'
import { Tabs } from 'expo-router'

const styles = StyleSheet.create({
  tab: {
    backgroundColor: theme.colors.blue700,
    borderRadius: 6,
    paddingVertical: 6,
    paddingBottom: 6,
    position: 'absolute',
    bottom: 10,
    elevation: 0,
    marginHorizontal: 10,
    ...Platform.select({
      web: {
        marginHorizontal: 'auto',
        width: '90%',
        maxWidth: 800,
      },
    }),
  },
})

const AppRoutes = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: Platform.OS !== 'web',
        headerStatusBarHeight: 0,
        tabBarStyle: styles.tab,
        tabBarActiveTintColor: theme.colors.blue50,
        tabBarInactiveTintColor: theme.colors.blue500,
      }}
    >
      <Tabs.Screen
        name='home/index'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='home'
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='gallery/index'
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='grid'
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='create/index'
        options={{
          tabBarLabel: 'New Book',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='bookmark'
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default AppRoutes
