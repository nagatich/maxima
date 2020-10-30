import { ReactElement } from "react";

export enum Type {
  primary = 'primary',
  secondary = 'secondary',
  base = 'base',
  success = 'success',
  danger = 'danger',
}
export interface Props {
  title: string | ReactElement
  onPress: () => void
  styles?: any
  type?: Type
}
