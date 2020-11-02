import styled from 'styled-components/native'

export default styled.View`
  background-color: ${(props): string => props.theme.bgColor.safe};
  padding: 10px;
`

export const IconView = styled.View`
  align-self: flex-end;
`

export const Image = styled.Image`
  width: 24px;
  height: 24px;
`
