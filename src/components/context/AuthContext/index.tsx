import * as React from 'react'

import { UserHook } from 'lib/hooks/useUser'
import { useUser } from 'lib/hooks/useUser'

const UserContext = React.createContext({} as UserHook)

export const useAuth = () => {
  return React.useContext(UserContext)
}

const AuthContext: React.FC = ({ children }) => {
  const auth = useUser()

  return (
    <UserContext.Provider value={auth}>
      { children }
    </UserContext.Provider>
  )
}

export default AuthContext
