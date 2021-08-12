import { Alert } from 'react-native'
import { getRoot } from 'mobx-state-tree'
import { RootStore } from '../../root-store'
import { GuildApi } from 'services/api'

export async function saveMission(self: any, mission: string) {
  // alert('YO SAVING MISSION ' + mission)

  const root = getRoot(self) as RootStore
  // const { uid }: any = root.userStore
  const { id } = self.guild

  root.guildStore.guilds.get(id).setMission(mission)

  const api = new GuildApi(self.env.api)
  await api.guildSetMission(id, mission)

  // root.playerStore.setSelectedPlayer(uid)
  // root.navigationStore.navigateTo('profile')
  //root.navigationStore.newResetTo('main') // try guildProfile?
  //RN : we are sending back to the user on guild profile screen : issue #25
  // root.navigationStore.goBack()
  Alert.alert(undefined, `guild.missionUpdated`)

  // Update beacon in database
  // Update playerobj in database

  // Update playerobj locally - or have this handled by HMMMM automatish? does that solve the weirdness
  // do it locally in case theres no beacon we wount get the

  return true
}
