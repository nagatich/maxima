import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import Styled, {
  StyledFlatList,
} from './styles'
import { Photo } from './types'

import Input from 'components/common/Input'
import Loader from 'components/common/Loader'
import PhotoCard from './PhotoCard'

const getPhotos = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/photos')
  const json = await req.json()
  return json
}

const PhotosScreen: React.FC = () => {
  const [photos, setPhotos] = React.useState<Photo[]>([])
  const [inputValue, setInputValue] = React.useState<string>('')

  React.useEffect(() => {
    getPhotos()
      .then((res: Photo[]) => {
        setPhotos(res)
      })
  }, [])

  const onChangeText = (text: string): void => {
    setInputValue(text)
  }

  if (!photos.length) return <Loader />

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Styled>
        <Input
          label="Введите ID альбома"
          styles={{
            marginBottom: 10,
          }}
          value={inputValue}
          onChangeText={onChangeText}
          keyboardType="numeric"
        />
        <StyledFlatList
          data={inputValue ? photos.filter((photo) => photo.albumId.toString() === inputValue) : photos}
          renderItem={({ item }) => <PhotoCard photo={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </Styled>
    </TouchableWithoutFeedback>
  )
}

export default React.memo(PhotosScreen)
