import React from 'react'
import { View, Text, Button } from 'react-native'

import { useAuth } from 'components/context/AuthContext'

const PhotosScreen: React.FC = () => {
  const auth = useAuth()

  return (
    <View>
      <Text>{ JSON.stringify(auth.user) }</Text>
      <Button
        title="выйти"
        onPress={() => auth.signOut()}
      />
    </View>
  )
}

export default PhotosScreen
