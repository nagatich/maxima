import { ReactElement } from "react";

export interface Props {
  label?: string | ReactElement
  isFocused?: boolean
  value?: string
  isPassword?: boolean
  styles?: any
  onFocus?: () => void
  onBlur?: () => void
  onChangeText?: (text: string) => void
}
