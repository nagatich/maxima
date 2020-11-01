import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RouteProp } from '@react-navigation/native'

export type RootParamList = {
  MainNavigator: undefined,
  AuthNavigator: undefined
}

type RootNavigationProp = DrawerNavigationProp<RootParamList, 'MainNavigator'>
type RootRouterProp = RouteProp<RootParamList, 'MainNavigator'>

export interface RootNavigationProps {
  navigation?: RootNavigationProp
  route?: RootRouterProp
}
