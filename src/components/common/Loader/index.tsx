import React from 'react'
import { ActivityIndicator } from 'react-native'

import Styled from './styles'

const Loader: React.FC = () => {
  return (
    <Styled>
      <ActivityIndicator
        color="#0000ff"
        size="large"
      />
    </Styled>
  )
}

export default Loader
