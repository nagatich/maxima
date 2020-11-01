import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MainNavigator from '../MainNavigator'
import AuthNavigator from '../AuthNavigator'
import { useAuth } from 'components/context/AuthContext'

const Drawer = createDrawerNavigator()

const RootNavigator: React.FC = () => {
  const auth = useAuth()
  
  return (
    <Drawer.Navigator>
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
          title: auth.user ? 'Выйти' : 'Войти',
        }}
      />
    </Drawer.Navigator>
  )
}

export default RootNavigator
