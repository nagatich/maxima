import styled from 'styled-components/native'

import { Type } from './types'

interface Props {
  styles?: any
  type?: Type
}

export default styled.TouchableOpacity<Props>`
  border: 1px solid;
  padding: ${(props) => props.theme.margins.small};
  border-radius: 5px;
  background-color: ${(props) => {
    switch(props.type) {
      case Type.base: {
        return (props) => props.theme.bgColor.base
      }
      case Type.primary: {
        return (props) => props.theme.bgColor.primary
      }
      case Type.danger: {
        return (props) => props.theme.bgColor.danger
      }
      case Type.success: {
        return (props) => props.theme.bgColor.safe
      }
      case Type.secondary: {
        return (props) => props.theme.bgColor.secondary
      }
      default: {
        return 'transparent'
      }
    }
  }};
  ${(props) => props.styles};
`
