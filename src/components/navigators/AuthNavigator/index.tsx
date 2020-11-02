import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'components/screens/LoginScreen'
import Header from 'components/common/Header'
import { RootNavigationProps } from '../RootNavigator/types'

const StackNavigator = createStackNavigator()

const AuthNavigator: React.FC<RootNavigationProps> = ({ navigation }) => {
  return (
    <>
      <Header
        navigation={navigation}
      />
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNavigator.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Войти',
          }}
        />
      </StackNavigator.Navigator>
    </>
  )
}

export default AuthNavigator
