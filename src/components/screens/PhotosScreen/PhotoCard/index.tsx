import * as React from 'react'

import Styled, {
  Image,
  Title,
  Bold,
} from './styles'
import { Props } from './types'

const PhotoCard: React.FC<Props> = ({ photo }) => {
  return (
    <Styled>
      <Title>
        Название: <Bold>{ photo.title }</Bold>
      </Title>
      <Title>
        ID альбома: <Bold>{ photo.albumId }</Bold>
      </Title>
      <Image
        source={{
          uri: photo.url,
        }}
      />
    </Styled>
  )
}

export default PhotoCard
