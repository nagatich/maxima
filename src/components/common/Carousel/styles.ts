import styled from 'styled-components/native'

export interface Props {
  style?: any
}

export interface BodyProps {
  isHidden: boolean
}

export default styled.View<Props>`
  border: 1px solid;
  padding: ${(props) => props.theme.margins.small};
  ${(props) => props.style};
`

export const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Body = styled.View<BodyProps>`
  display: ${(props) => props.isHidden ? 'none' : 'flex' };
`
