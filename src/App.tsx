import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import themes from 'theme'
import AuthContext from 'components/context/AuthContext'
import RootNavigator from 'components/navigators/RootNavigator'

const App: React.FC = () => (
  <ThemeProvider theme={themes.defaultTheme}>
    <NavigationContainer>
      <AuthContext>
        <RootNavigator />
      </AuthContext>
    </NavigationContainer>
  </ThemeProvider>
)

export default App
