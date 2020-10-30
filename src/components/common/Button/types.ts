import { ReactElement } from "react";

export interface Props {
  title: string | ReactElement
  onPress: () => void
  styles?: any
}
