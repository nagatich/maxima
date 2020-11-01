import styled from 'styled-components/native'

export default styled.View`
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: ${(props) => props.theme.margins.small};
  padding: ${(props) => props.theme.margins.small};
`

export const Title = styled.Text`
  margin-bottom: ${(props) => props.theme.margins.small};
`

export const Bold = styled.Text`
  font-weight: bold;
`

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`
