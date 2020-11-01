import styled from 'styled-components/native'

export default styled.View`
  padding: ${(props) => props.theme.margins.base};
  border: 1px solid;
  margin-bottom: ${(props) => props.theme.margins.small};
  border-radius: 5px;
`
