import { ReactElement } from 'react'
import { KeyboardTypeOptions } from 'react-native'

export interface Props {
  label?: string | ReactElement
  isFocused?: boolean
  value?: string
  isPassword?: boolean
  styles?: any
  keyboardType?: KeyboardTypeOptions
  onFocus?: () => void
  onBlur?: () => void
  onChangeText?: (text: string) => void
}
