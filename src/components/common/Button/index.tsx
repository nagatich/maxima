import * as React from 'react'
import { Text } from 'react-native'

import Styled from './styles'
import { Props } from './types'

const Button: React.FC<Props> = ({
  title,
  onPress,
  styles,
  type,
}) => (
  <Styled
    onPress={onPress}
    styles={styles}
    type={type}
  >
    <Text>{ title }</Text>
  </Styled>
)

export default Button
