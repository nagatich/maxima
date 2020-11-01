import * as React from 'react'
import {
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Alert
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import Styled, {
  Form,
} from './styles'

import { Type } from 'components/common/Button/types'
import Input from 'components/common/Input'
import Button from 'components/common/Button'
import { useAuth } from 'components/context/AuthContext'
import { MainNavigationProps } from 'components/navigators/MainNavigator/types'

const LoginScreen: React.FC<MainNavigationProps> = ({ navigation }) => {
  const [login, setLogin] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const auth = useAuth()
  const isFocused = useIsFocused()

  React.useEffect(() => {
    if (isFocused && auth.user) {
      auth.signOut()
    }
  }, [isFocused])

  const onLoginChangeText = (text: string): void => {
    setLogin(text)
  }

  const onPasswordChangeText = (text: string): void => {
    setPassword(text)
  }

  const authenticate = (): void => {
    auth.signIn(login, password)
      .then(() => {
        if (navigation) navigation.navigate('PhotosScreen')
      })
      .catch(() => {
        Alert.alert(
          'Ошибка',
          'Неверный логин или пароль'
        )
      })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Styled>
        <Form>
          <Text>Вход</Text>
          <Input
            label="Логин"
            value={login}
            onChangeText={onLoginChangeText}
            styles={{
              marginBottom: 20,
            }}
          />
          <Input
            label="Пароль"
            value={password}
            onChangeText={onPasswordChangeText}
            isPassword
            styles={{
              marginBottom: 20,
            }}
          />
          <Button
            title="Войти"
            onPress={authenticate}
            styles={{
              alignItems: 'center',
              border: 'none',
            }}
            type={Type.success}
          />
        </Form>
      </Styled>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen
