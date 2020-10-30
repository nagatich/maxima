import * as React from 'react'

import Data from 'components/context/AuthContext/data'
import { User } from 'components/context/AuthContext/types'

export interface UserHook {
  user: User | null
  signIn: (username: string, password: string) => Promise<User | null>
  signOut: () => void
}

export const useUser = (): UserHook => {
  const [user, setUser] = React.useState<User | null>(null)

  const signIn = (username: string, password: string): Promise<User | null> => {
    const foundUser = Data.find((item) => item.username === username && item.password === password) || null
    setUser(foundUser)
    return new Promise((resolve, reject) => {
      if (foundUser) {
        resolve(foundUser)
      } else {
        reject()
      }
    })
  }

  const signOut = (): void => {
    setUser(null)
  }

  return {
    user,
    signIn,
    signOut,
  }
}
