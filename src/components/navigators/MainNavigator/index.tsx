import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import UsersScreen from 'components/screens/UsersScreen'
import PhotosScreen from 'components/screens/PhotosScreen'
import { useAuth } from 'components/context/AuthContext'
import Header from 'components/common/Header'
import { RootNavigationProps } from '../RootNavigator/types'

const Tabs = createBottomTabNavigator()

const MainNavigator: React.FC<RootNavigationProps> = ({ navigation }) => {
  const auth = useAuth()

  return (
    <>
      <Header
        navigation={navigation}
      />
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
    </>
  )
}

export default MainNavigator
