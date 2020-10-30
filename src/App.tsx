import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import themes from 'theme'
import MainNavigator from 'components/navigators/MainNavigator'
import AuthNavigator from 'components/navigators/AuthNavigator'

const App: React.FC = () => {
  const [isLoggedIn] = React.useState<boolean>(true)

  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <NavigationContainer>
          {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
