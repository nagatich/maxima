import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'components/screens/LoginScreen'

const StackNavigator = createStackNavigator()

const AuthNavigator: React.FC = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
      />
    </StackNavigator.Navigator>
  )
}

export default AuthNavigator
