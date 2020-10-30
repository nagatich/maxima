import styled from 'styled-components/native'

interface Props {
  styles?: any
}

export default styled.TouchableOpacity<Props>`
  border: 1px solid;
  padding: ${(props) => props.theme.margins.small};
  border-radius: 5px;
  ${(props) => props.styles};
`
