import * as React from 'react'
import { Text } from 'react-native'

import Styled, {
  Form,
} from './styles'

import { Type } from 'components/common/Button/types'
import Input from 'components/common/Input'
import Button from 'components/common/Button'
import { useAuth } from 'components/context/AuthContext'

const LoginScreen: React.FC = ({ navigation }) => {
  const [login, setLogin] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const auth = useAuth()

  const onLoginChangeText = (text: string): void => {
    setLogin(text)
  }

  const onPasswordChangeText = (text: string): void => {
    setPassword(text)
  }

  const authenticate = (): void => {
    auth.signIn(login, password)
      .then((res) => {
        console.log(res)
        navigation.navigate('UsersScreen')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
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
  )
}

export default LoginScreen
