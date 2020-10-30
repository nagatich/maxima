import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import themes from 'theme'
import MainNavigator from 'components/navigators/MainNavigator'
import AuthNavigator from 'components/navigators/AuthNavigator'

const App: React.FC = () => {
  const [isLoggedIn] = React.useState<boolean>(false)

  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <NavigationContainer>
          <MainNavigator
            isLoggedIn={isLoggedIn}
          />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
