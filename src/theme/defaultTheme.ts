import { defaultThemeVariables } from './variables/defaultThemeVariables'

export default {
  isDefault: true,
  textColor: {
    base: defaultThemeVariables.color.blackLighter,
    primary: defaultThemeVariables.color.white,
    baseLight: defaultThemeVariables.color.greyDark,
    baseFaded: defaultThemeVariables.color.greyLighter,
    activeBright: defaultThemeVariables.color.orange,
    activeFaded: defaultThemeVariables.color.grey,
    error: defaultThemeVariables.color.red,
    success: defaultThemeVariables.color.green,
  },
  bgColor: {
    base: defaultThemeVariables.color.white,
    primary: defaultThemeVariables.color.orange,
    secondary: defaultThemeVariables.color.grey,
    secondaryLight: defaultThemeVariables.color.greyLight,
    secondaryBlue: defaultThemeVariables.color.greyBlueLight,
    extra: defaultThemeVariables.color.beigePale,
    blackout: defaultThemeVariables.color.blackLighter,
    danger: defaultThemeVariables.color.red,
    safe: defaultThemeVariables.color.green,
  },
  margins: {
    small: defaultThemeVariables.margins.small,
    base: defaultThemeVariables.margins.base,
    big: defaultThemeVariables.margins.big,
  }
}
