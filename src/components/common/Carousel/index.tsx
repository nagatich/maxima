import React from 'react'
import { Text } from 'react-native'

import Styled, {
  Head,
  Body,
} from './styles'
import { Props } from './types'

import Button from 'components/common/Button'

const Carousel: React.FC<Props> = ({
  title,
  children,
  style,
}) => {
  const [isHidden, setIsHidden] = React.useState<boolean>(true)

  const toggle = (): void => {
    setIsHidden((prev) => !prev)
  }

  return (
    <Styled
      style={style}
    >
      <Head>
        <Text>
          { title }
        </Text>
        <Button
          title="Открыть"
          onPress={toggle}
          styles={{
            border: 'none',
          }}
        />
      </Head>
      <Body
        isHidden={isHidden}
      >
        { children }
      </Body>
    </Styled>
  )
}

export default Carousel
