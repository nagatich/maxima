import React from 'react'

import Styled from './styles'
import { User } from './types'

import UserCard from './UserCard'

const getUsers = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await req.json()
  return json
}

const UsersScreen: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([])

  React.useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res)
      })
  }, [])

  if (!users.length) return null

  return (
    <Styled>
      {users.map((user) => <UserCard user={user} key={user.id} />)}
    </Styled>
  )
}

export default UsersScreen
