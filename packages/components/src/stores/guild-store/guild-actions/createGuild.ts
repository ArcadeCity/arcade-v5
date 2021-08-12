import { display } from 'lib'
import { GuildApi, normalizeApiChatroom, normalizeApiGuild } from 'services/api'
import { Guild } from '../guild-models'
import { GuildStore } from '../guild-store'

export const createGuild = async (self: GuildStore, guild: Guild) => {
  const api = new GuildApi(self.env.api)
  const { chatroom: apiChatroom, guild: apiGuild }: any = await api.guildCreate(
    guild
  )

  const chatroom = normalizeApiChatroom(apiChatroom)
  const newGuild = normalizeApiGuild(apiGuild)

  self.rootStore.chatStore.setChatroom(chatroom)
  self.setGuild(newGuild)
  self.setGuildId(newGuild.id)

  display({
    name: 'createGuild',
    preview: `Successfully created ${newGuild.name}`,
    value: { guild, newGuild, apiGuild },
    important: true,
  })

  return true

  // const root: any = getRoot(self)
  // const {
  //   userStore: { name, photo, uid },
  // } = root

  // Prepare the GuildMember object of the founding member
  // const member: GuildMember = {
  //   name,
  //   photo,
  //   id: uid,
  //   rank: 'founder',
  // }

  // Create the guild in firestore 'guilds' collection and set the beacon. And this user as founder
  // const { id: guildId }: any = await api.guildCreate(guild)

  // Update the user's PLAYER firestore object and beacon with this guild id
  // await api.updateUserWithGuildId(uid, guildId)

  // Create the guild chatroom
  // const chatroom: any = await api.createGuildChatroom(guildId)

  // console.tron.log('whats this chatroom we have hre now:', chatroom)
}
