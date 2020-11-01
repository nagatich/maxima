import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { Photo } from './types'

export default styled.View`
  padding: ${(props) => props.theme.margins.small};
  flex: 1;
`

export const StyledFlatList = styled(FlatList as new () => FlatList<Photo>)`
  flex: 1;
`
