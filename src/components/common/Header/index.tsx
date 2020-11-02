import * as React from 'react'
import { TouchableOpacity } from 'react-native'

import Styled, {
  IconView,
  Image,
} from './styled'
import { RootNavigationProps } from 'components/navigators/RootNavigator/types'

const Header: React.FC<RootNavigationProps> = ({
  navigation,
}) => {
  return (
    <>
      <Styled>
        <IconView>
          <TouchableOpacity
            onPress={() => {
              navigation?.openDrawer()
            }}
          >
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png',
              }}
            />
          </TouchableOpacity>
        </IconView>
      </Styled>
    </>
  )
}

export default Header
