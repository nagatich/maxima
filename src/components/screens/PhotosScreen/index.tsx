import React from 'react'
import { View, Text } from 'react-native'

import { useAuth } from 'components/context/AuthContext'

const PhotosScreen: React.FC = () => {
  const auth = useAuth()

  return (
    <View>
      <Text>{ JSON.stringify(auth.user) }</Text>
    </View>
  )
}

export default PhotosScreen
