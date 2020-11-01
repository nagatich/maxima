import * as React from 'react'

import Styled from './styles'
import { User } from './types'

import Loader from 'components/common/Loader'
import UserCard from './UserCard'

const getUsers = async (): Promise<User[]> => {
  const req = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await req.json()
  return json
}

const UsersScreen: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([])

  React.useEffect(() => {
    getUsers()
      .then((res: User[]) => {
        setUsers(res)
      })
  }, [])

  if (!users.length) return <Loader />

  return (
    <Styled
      data={users}
      renderItem={({ item }) => <UserCard user={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default React.memo(UsersScreen)
