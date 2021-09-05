import * as React from 'react'
import { View } from 'react-native'
import { Text } from 'views/shared'
import { spacing } from 'views/theme'
import { translate } from 'i18n'
import { observer } from 'mobx-react-lite'
import { useStores } from 'stores'

interface Props {
  invited?: boolean
}

export const InviteStatus = observer(({ invited = false }: Props) => {
  const { authStore } = useStores()
  const title = invited
    ? translate('common.welcome')
    : translate('comms.inviteRequired')
  const text = invited
    ? `${translate('guild.invitedToJoin2')} Arcade City.`
    : translate('comms.toJoin')
  return (
    <View style={{ alignItems: 'center' }} key={authStore?.locale}>
      <Text preset='title' text={title} />
      <Text
        preset='description'
        text={text}
        style={{
          fontSize: 18,
          lineHeight: 24,
          paddingHorizontal: spacing[6],
          textAlign: 'center',
        }}
      />
    </View>
  )
})
