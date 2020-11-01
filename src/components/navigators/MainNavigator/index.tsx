import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import UsersScreen from 'components/screens/UsersScreen'
import PhotosScreen from 'components/screens/PhotosScreen'
import { useAuth } from 'components/context/AuthContext'

const Tabs = createBottomTabNavigator()

const MainNavigator: React.FC = () => {
  const auth = useAuth()

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{
          title: 'Пользователи',
        }}
      />
      {auth.user && (
        <Tabs.Screen
          name="PhotosScreen"
          component={PhotosScreen}
          options={{
            title: 'Фотографии',
          }}
        />
      )}
    </Tabs.Navigator>
  )
}

export default MainNavigator
