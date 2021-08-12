import { Alert } from 'react-native'
import { GuildApi } from 'services/api'
import { GuildInvite } from '../guild-models'
import { GuildStore } from '../guild-store'

export const inviteAccept = async (self: GuildStore, invite: GuildInvite) => {
  const api = new GuildApi(self.env.api)
  await api.acceptGuildInvite(invite.id)
  self.setGuildId(invite.guild.id)
  Alert.alert('You joined the guild!')
  return true

  // await api.addMemberToGuild(member, invite.guild.id)
  // await api.ignoreInvitesFromGuild(uid, invite.guild.id)
  // self.rootStore.chatStore.joinGuildChatroom(invite.guild.id)

  // Alert.alert(undefined, `guild.playerJoined`)

  // const root: any = getRoot(self)
  // const {
  //   userStore: { name, photo, uid },
  // } = root

  // create a member object to pass to firestore guild membershaz

  // const member: GuildMember = {
  //   id: uid,
  //   name,
  //   photo,
  //   rank: 'member',
  // }

  // root.navigationStore.navigateTo('guildIntro')
  // works but why doesn't it change Create Guild into . . ..  .. . .
  // and it doesn't update the guild members

  // Let's accept this invite and ignore the others from this guild(?) or leave em?
}
