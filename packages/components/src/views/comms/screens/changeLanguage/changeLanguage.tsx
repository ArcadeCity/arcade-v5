import React from 'react'
import { View, Alert, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Screen, MenuButton, Text } from 'views/shared'
import { changeLanguage, translate } from 'i18n'
import { capitalize } from 'lodash'
import { spacing } from 'views/theme'
import { observer } from 'mobx-react-lite'
import { useStores } from 'stores'

const CONTAINER: ViewStyle = {
  paddingBottom: spacing[7],
  paddingTop: spacing[5],
}

export const ChangeLanguage = observer(() => {
  const { navigate, setOptions } = useNavigation()
  setOptions({ title: translate('comms.changeLanguage') })
  const { authStore } = useStores()
  const { locale } = authStore
  const isCurrentLocaleEnglish = locale.includes('en')
  const isCurrentLocaleSpanish = locale.includes('es')
  const isCurrentLocalePortuguese = locale.includes('pt')
  const handleLanguageChange = (locale: string) => {
    changeLanguage(locale)
    authStore.setLocale(locale)
    navigate('menu')
  }

  const handleConfirm = (locale: string) => {
    Alert.alert(
      translate('comms.changeLanguage'),
      translate(`common.languages.${locale}`),
      [
        {
          text: capitalize(translate('common.no')),
          style: 'cancel',
        },
        {
          text: capitalize(translate('common.yes')),
          style: 'destructive',
          onPress: () => handleLanguageChange(locale),
        },
      ]
    )
  }

  return (
    <Screen preset='scrollStack'>
      <View style={CONTAINER}>
        <Text preset='title' tx='comms.changeLanguage' />
        <MenuButton
          disabled={isCurrentLocaleEnglish}
          title='English'
          description={
            isCurrentLocaleEnglish
              ? capitalize(translate('common.current'))
              : translate('common.languages.en')
          }
          onPress={() => handleConfirm('en')}
        />
        <MenuButton
          key='pt-br'
          disabled={isCurrentLocalePortuguese}
          title='Português (Brasil)'
          description={
            isCurrentLocalePortuguese
              ? capitalize(translate('common.current'))
              : translate('common.languages.pt-br')
          }
          onPress={() => handleConfirm('pt-br')}
        />
        <MenuButton
          disabled={isCurrentLocaleSpanish}
          title='Español'
          description={
            isCurrentLocaleSpanish
              ? capitalize(translate('common.current'))
              : translate('common.languages.es')
          }
          onPress={() => handleConfirm('es')}
        />
      </View>
    </Screen>
  )
})
