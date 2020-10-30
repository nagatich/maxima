import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import UsersScreen from 'components/screens/UsersScreen'
import PhotosScreen from 'components/screens/PhotosScreen'
import LoginScreen from 'components/screens/LoginScreen'

const BottomNavigator = createBottomTabNavigator()

interface Props {
  isLoggedIn: boolean
}

const MainNavigator: React.FC<Props> = ({ isLoggedIn }) => {
  return (
    <BottomNavigator.Navigator>
      <BottomNavigator.Screen
        name="Users"
        component={UsersScreen}
      />
      {isLoggedIn && (
        <BottomNavigator.Screen
          name="Photos"
          component={PhotosScreen}
        />
      )}
      {!isLoggedIn && (
        <BottomNavigator.Screen
          name="Login"
          component={LoginScreen}
        />
      )}
    </BottomNavigator.Navigator>
  )
}

export default MainNavigator
