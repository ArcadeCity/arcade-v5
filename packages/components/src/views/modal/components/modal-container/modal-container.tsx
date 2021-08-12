import React, { useEffect, useRef } from 'react'
import { Animated, Image, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useStores } from 'stores'
import { ModalName } from 'stores/modal-store'
import {
  AddCard,
  AddDetails,
  RequestActive,
  RequestBegin,
  RequestConfirm,
  RequestView,
} from 'views/service'
import { images } from 'views/theme'

export const ModalContainer: React.FC<{}> = observer(() => {
  // State
  const { modalStore } = useStores()
  const name = modalStore.name
  const status = modalStore.status

  // Animation
  const show = status === 'showing'
  const modalOpacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(modalOpacity, {
      toValue: show ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }, [show])

  const fadeInUpProps: any = {
    ...MODALPROPS,
    zIndex: show ? 9000 : -1,
    elevation: show ? 9000 : -1,
    opacity: modalOpacity,
  }

  // UI
  let componentToRender
  switch (name) {
    case ModalName.ADD_CARD:
      componentToRender = <AddCard />
      break
    case ModalName.ADD_DETAILS:
      componentToRender = <AddDetails />
      break
    case ModalName.REQUEST_ACTIVE:
      componentToRender = <RequestActive />
      break
    case ModalName.REQUEST_BEGIN:
      componentToRender = <RequestBegin />
      break
    case ModalName.REQUEST_CONFIRM:
      componentToRender = <RequestConfirm />
      break
    case ModalName.REQUEST_VIEW:
      componentToRender = <RequestView />
      break
    default:
      componentToRender = null
  }

  if (!componentToRender) return null

  const pointerEvents = show ? 'auto' : 'none'

  return (
    <Animated.View style={fadeInUpProps} pointerEvents={pointerEvents}>
      {name === 'add-details' || name === 'request-active' ? null : (
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 0,
            zIndex: 9902,
          }}
        >
          <TouchableOpacity
            onPress={modalStore.closeModal}
            style={{ padding: 25 }}
          >
            <Image source={images.close} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
        </View>
      )}
      {componentToRender}
    </Animated.View>
  )
})

const MODALPROPS: any = {
  flex: 1,
  height: '100%',
  width: '100%',
  position: 'absolute',
}
