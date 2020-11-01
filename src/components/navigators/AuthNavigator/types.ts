import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RouteProp } from '@react-navigation/native'

export type AuthParamList = {
  LoginScreen: undefined,
}

type AuthNavigationProp = DrawerNavigationProp<AuthParamList, 'LoginScreen'>
type AuthRouterProp = RouteProp<AuthParamList, 'LoginScreen'>

export interface AuthNavigationProps {
  navigation?: AuthNavigationProp
  route?: AuthRouterProp
}
