import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import UsersScreen from 'components/screens/UsersScreen'
import PhotosScreen from 'components/screens/PhotosScreen'

const BottomNavigator = createBottomTabNavigator()

const MainNavigator: React.FC = () => {
  console.log(1)
  return (
    <BottomNavigator.Navigator>
      <BottomNavigator.Screen
        name="users"
        component={UsersScreen}
      />
      <BottomNavigator.Screen
        name="photos"
        component={PhotosScreen}
      />
    </BottomNavigator.Navigator>
  )
}

export default MainNavigator
