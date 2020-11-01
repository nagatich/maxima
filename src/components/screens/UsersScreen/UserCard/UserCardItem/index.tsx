import * as React from 'react'
import { Text } from 'react-native'

import Styled, {
  BoldText,
} from './styles'

interface Props {
  title: string
  text: string
}

const UserCardItem: React.FC<Props> = ({ title, text }) => {
  return (
    <Styled>
      <Text>
        <BoldText>{ title }</BoldText>: { text }
      </Text>
    </Styled>
  )
}

export default UserCardItem
