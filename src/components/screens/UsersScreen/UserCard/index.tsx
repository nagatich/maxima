import * as React from 'react'
import { View } from 'react-native'

import { Props } from './types'
import Styled from './styles'

import Carousel from 'components/common/Carousel'
import UserCardItem from './UserCardItem'

const UserCard: React.FC<Props> = ({ user }) => {
  const { address, company } = user

  return (
    <Styled>
      <UserCardItem
        title="Имя"
        text={user.name}
      />
      <UserCardItem
        title="Email"
        text={user.email}
      />
      <UserCardItem
        title="Телефон"
        text={user.phone}
      />
      <Carousel
        title="Адрес"
        style={{
          marginBottom: 10,
        }}
      >
        <View>
          <UserCardItem
            title="Почтовый индекс"
            text={ address.zipcode }
          />
          <UserCardItem
            title="Город"
            text={ address.city }
          />
          <UserCardItem
            title="Улица"
            text={ address.street }
          />
          <UserCardItem
            title="Дом"
            text={ address.suite }
          />
        </View>
      </Carousel>
      <Carousel
        title="Компания"
      >
        <View>
          <UserCardItem
            title="Название компании"
            text={ company.name }
          />
          <UserCardItem
            title="Девиз"
            text={ company.catchPhrase }
          />
          <UserCardItem
            title="Род занятий"
            text={ company.bs }
          />
        </View>
      </Carousel>
    </Styled>
  )
}

export default UserCard
