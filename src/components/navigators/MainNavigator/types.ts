import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RouteProp } from '@react-navigation/native'

export type MainParamList = {
  UsersScreen: undefined,
  PhotosScreen: undefined
}

type MainNavigationProp = DrawerNavigationProp<MainParamList, 'UsersScreen'>
type MainRouterProp = RouteProp<MainParamList, 'UsersScreen'>

export interface MainNavigationProps {
  navigation?: MainNavigationProp
  route?: MainRouterProp
}
