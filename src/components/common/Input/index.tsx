import React from 'react'

import { Props } from './types'
import Styled, {
  StyledInput,
  Label,
} from './styles'

const Input: React.FC<Props> = ({
  label,
  isFocused = false,
  onFocus,
  onBlur,
  onChangeText,
  value,
  isPassword,
  styles,
}) => {
  const [isInputFocused, setIsInputFocused] = React.useState<boolean>(isFocused)
  const [inputValue, setInputValue] = React.useState(value || "")

  const onInputFocus = () => {
    setIsInputFocused(true)
    onFocus && onFocus()
  }

  const onInputBlur = () => {
    setIsInputFocused(false)
    onBlur && onBlur()
  }

  const onInputChangeText = (text: string) => {
    setInputValue(text)
    onChangeText && onChangeText(text)
  }

  return (
    <Styled
      styles={styles}
    >
      {label && <Label>{ label }</Label>}
      <StyledInput
        value={inputValue}
        isFocused={isInputFocused}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChangeText={onInputChangeText}
        secureTextEntry={isPassword}
      />
    </Styled>
  )
}

export default Input
