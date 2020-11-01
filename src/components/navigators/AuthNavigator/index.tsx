import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'components/screens/LoginScreen'

const StackNavigator = createStackNavigator()

const AuthNavigator: React.FC = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Войти',
        }}
      />
    </StackNavigator.Navigator>
  )
}

export default AuthNavigator
