import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../(screens)/home'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BookList from '../(screens)/gallery'

const Tab = createBottomTabNavigator()

const styles = StyleSheet.create({
  tab: {
    // backgroundColor: theme.colors.green300,
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
    <Tab.Navigator
      screenOptions={{
        headerShown: Platform.OS !== 'web',
        headerStatusBarHeight: 0,
        tabBarStyle: styles.tab,
        // tabBarActiveTintColor: theme.colors.green100,
        // tabBarInactiveTintColor: theme.colors.green500,
      }}
    >
      <Tab.Screen
        name='home'
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name='home' size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name='gallery'
        component={BookList}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color }) => <Ionicons name='grid' size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes
