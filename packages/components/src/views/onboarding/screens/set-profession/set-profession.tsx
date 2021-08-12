import React, { useEffect, useState } from 'react'
import { ViewStyle } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Button, Screen, Text } from 'views/shared'
import { spacing } from 'views/theme'
import { professions } from './professions'
import { translate } from 'i18n'
import { capitalize } from 'lodash'

export const SetProfession: React.FC<{}> = observer(() => {
  // Nav
  const { goBack, setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Select Profession' })
  }, [])

  // State
  const { authStore } = useStores()

  // UI
  const [profession, setProfession] = useState(translate('service.rider'))
  const [confirming, setConfirming] = useState(false)
  // @ts-ignore 'confirmed' is declared but its value is never read.ts(6133)
  const [confirmed, setConfirmed] = useState(false)
  const [toggleSubclass, setToggleSubclass] = useState(false)
  const [selectedCategory, selectCategory] = useState('')
  const selectProfession = (selectedProfession: string) => {
    setConfirming(true)
    setProfession(selectedProfession)
  }

  const ConfirmingPane = () => (
    <>
      <Text
        preset='title3'
        tx='comms.confirmProfession'
        txOptions={{ profession }}
        style={{ marginVertical: 10, textAlign: 'center', paddingTop: 40 }}
      />
      <Button
        text={translate('comms.yesProfession', { profession })}
        style={BUTTON}
        onPress={() => {
          setConfirmed(true)
          authStore.saveProfession(profession)
          goBack()
        }}
      />
      <Button
        text={capitalize(translate('common.no'))}
        style={BUTTON}
        preset='secondary'
        onPress={() => setConfirming(false)}
      />
    </>
  )

  const SelectionPane = () => (
    <>
      <Text
        preset='title3'
        tx='onboarding.riderOrDriver'
        style={{ marginVertical: 10, textAlign: 'center', paddingTop: 40 }}
      />
      <Text
        preset='bold'
        tx='onboarding.orAnotherServiceProvider'
        style={{ paddingBottom: 30, textAlign: 'center' }}
      />

      <Button
        tx='service.rider'
        style={BUTTON}
        onPress={() => selectProfession(translate('service.rider'))}
      />
      <Button
        tx='service.driver'
        preset='purpleglow'
        style={BUTTON}
        onPress={() => selectProfession(translate('service.driver'))}
      />
      <Button
        text={capitalize(translate('common.other'))}
        preset='secondary'
        style={BUTTON}
        onPress={() => {
          setToggleSubclass(!toggleSubclass)
        }}
      />

      {toggleSubclass && (
        <>
          {Object.keys(professions).map((category) => (
            <>
              <Button
                text={translate(category)}
                key={category}
                preset='secondary'
                style={BUTTON}
                onPress={() => {
                  if (selectedCategory === category) {
                    selectCategory('')
                  } else {
                    selectCategory(category)
                  }
                }}
              />
              {selectedCategory === category && (
                <>
                  {professions[category].map((profession: string) => (
                    <Button
                      text={translate(profession)}
                      key={profession}
                      preset='purpleglow'
                      style={BUTTON}
                      onPress={() => selectProfession(translate(profession))}
                    />
                  ))}
                </>
              )}
            </>
          ))}
        </>
      )}
    </>
  )

  return (
    <Screen preset='scrollStack'>
      {confirming ? <ConfirmingPane /> : <SelectionPane />}
    </Screen>
  )
})

const BUTTON: ViewStyle = {
  marginVertical: spacing[4],
}
