import * as React from 'react'
import { Button, Screen, Text } from 'views/shared'
import { observer } from 'mobx-react-lite'
import { useStores } from 'stores'
import { translate } from 'i18n'
import { capitalize } from 'lodash'

export const GuildInvited = observer(() => {
  const { authStore, guildStore } = useStores()
  const selectedGuild = guildStore.selectedGuild
  const selectedInvite = guildStore.selectedInvite
  if (!selectedGuild || !selectedInvite) return null
  return (
    <Screen preset='scrollStack' key={authStore?.locale}>
      <Text
        preset='description'
        tx='guild.invitedToJoin2'
        style={{ marginTop: 0, marginBottom: 0, alignSelf: 'center' }}
      />
      <Text
        preset='title'
        text={selectedGuild.name}
        style={{ marginTop: 0, marginBottom: 20, alignSelf: 'center' }}
      />

      <Button
        text={capitalize(translate('common.join'))}
        style={{ marginBottom: 15 }}
        onPress={() => guildStore.inviteAccept(selectedInvite)}
      />

      <Button
        tx='common.ignore'
        preset='secondary'
        onPress={() => guildStore.inviteIgnore(selectedInvite)}
      />
    </Screen>
  )
})
