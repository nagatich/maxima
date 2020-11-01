import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MainNavigator from '../MainNavigator'
import AuthNavigator from '../AuthNavigator'

const Drawer = createDrawerNavigator()

const RootNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Users"
    >
      <Drawer.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{
          title: 'Пользователи',
        }}
      />
      <Drawer.Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={{
          title: 'Войти',
        }}
      />
    </Drawer.Navigator>
  )
}

export default RootNavigator
