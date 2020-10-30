import React from 'react'
import { Text } from 'react-native'

import Styled, {
  Form,
} from './styles'
import { Type } from 'components/common/Button/types'

import Input from 'components/common/Input'
import Button from 'components/common/Button'

const LoginScreen: React.FC = () => {
  const [login, setLogin] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")

  const onLoginChangeText = (text: string) => {
    setLogin(text)
  }

  const onPasswordChangeText = (text: string) => {
    setPassword(text)
  }

  const authenticate = () => {

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
