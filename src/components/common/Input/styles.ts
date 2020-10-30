import styled from 'styled-components/native'

interface Props {
  styles?: any
}

interface TextInputProps {
  isFocused: boolean
}

export default styled.View<Props>`
  ${(props) => props.styles}
`

export const Label = styled.Text`
  font-size: 10px;
`

export const StyledInput = styled.TextInput<TextInputProps>`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.isFocused ? props.theme.textColor.baseLight : props.theme.textColor.baseFaded};
`
