import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { User } from './types'

export default styled(FlatList as new () => FlatList<User>)`
  padding: ${(props) => props.theme.margins.small};
  flex: 1;
`
