import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import themes from 'theme'
import MainNavigator from 'components/navigators/MainNavigator'
import AuthContext from 'components/context/AuthContext'

const App: React.FC = () => (
  <ThemeProvider theme={themes.defaultTheme}>
    <NavigationContainer>
      <AuthContext>
        <MainNavigator />
      </AuthContext>
    </NavigationContainer>
  </ThemeProvider>
)

export default App
