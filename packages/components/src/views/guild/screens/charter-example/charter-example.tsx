import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Screen, Text } from 'views/shared'

export const CharterExample: React.FC<{}> = () => {
  const { setOptions } = useNavigation()
  setOptions({ title: 'Example Charter' })
  return (
    <Screen preset='scrollStack'>
      <Text preset='bold' tx='guild.introduction' style={{ marginTop: 25 }} />
      <Text preset='description' tx='guild.charterExplainer1' />

      <Text preset='description' tx='guild.charterExplainer2' />

      <Text preset='description' tx='guild.charterExplainer3' />

      <Text
        style={{ textAlign: 'center' }}
        preset='title3'
        text='Arcade City Austin'
      />
      <Text
        style={{ textAlign: 'center', marginBottom: 20 }}
        preset='bold'
        text='Charter of Rules and Regulations'
      />

      <Text
        preset='description'
        text='1. DRIVERS must be properly vetted before providing services under the Arcade City banner. '
      />
      <Text
        preset='description'
        text='1.1. Proper vetting includes proof of'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='1.1.1. TNC Card/Fingerprints.'
        style={INDENT2}
      />
      <Text
        preset='description'
        text='1.1.2. Copy of Driver License for verification purpose only.'
        style={INDENT2}
      />
      <Text
        preset='description'
        text='1.1.3. If an AC driver notices a possible non-vetted driver responding on a request, tag a Support Member'
        style={INDENT2}
      />

      <Text preset='description' text='2. ZERO TOLERANCE- PERMANENT BAN' />
      <Text
        preset='description'
        text='2.1. Driving under the influence or while intoxicated..'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='2.2. Sexual Harassment/Assault.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='2.2.1. Individuals that have been subjected to 2.2 are requested to report the incident immediately to AC leadership.'
        style={INDENT2}
      />
      <Text
        preset='description'
        text='2.3. Physical Altercation (Self-Defense okay).'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='2.4. Derogatory/threatening comments to any member of Arcade City community.'
        style={INDENT1}
      />

      <Text
        preset='description'
        text='3. DRIVERS utilizing the FB Ride Request page may only post on a ride request if your location is within 10 minutes of said request.'
      />
      <Text
        preset='description'
        text='3.1. A Collage (consisting of CURRENT photo of self, ACTUAL photo of vehicle, phone number and AC logo) MUST be posted on each request.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='3.2. An ETA or general location (vicinity) must be posted WITH each request at the time you post your collage. You can EITHER, post your collage and add Eta/Vicinity prior to submitting OR post the collage and then “EDIT” to add yourEta/vicinity. You may then “REPLY” if you wish to retype your phone number so riders can “copy and paste”.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='3.3. #RESOLVED: ALL DRIVERS (not riders), upon confirmation, needs to #Resolved the request. This will allow fellow drivers to move on from same request and it will show record in the event an issue or complaint is presented.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='3.4. Drivers may only post their own collage. Drivers tagging another driver that may be close to the pickup, should only tag driver’s name, not their collage.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='3.5. There will be no personal blocking of fellow drivers or support team members, as it creates issues on rider request page when you’re unable to see other’s comments.'
        style={INDENT1}
      />

      <Text
        preset='description'
        text='4. DRIVERS will give riders sufficient amount of time to respond or choose their driver before posting on other rides. At least 3 minutes before moving on to next request'
      />

      <Text
        preset='description'
        text='5. The Golden Rule - Treat your fellow driving members the way you wish to be treated. *This page should not be treated as a boxing ring. Posting on the page can be done in a professional manner without feeling the need to ridicule each other. If we cannot be uplifting and treat each other with respect, and there is a personal issue with somebody, please either feel free to make a lunch date or go play laser tag so you can work through whatever social media issue it may be.'
      />

      <Text
        preset='description'
        text='6. DRIVERS will demonstrate EXCELLENT customer service while using the Ride Request page.'
      />
      <Text
        preset='description'
        text='6.1. There will be NO negative, condescending, derogatory or bickering comments between riders and/or drivers.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='6.2. There will be NO solicitation or advertising of other driving platforms.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='6.3. If the rider posts a suggested donation and you do not agree with it, DO NOT COMMENT. If someone posts a dollar amount that may be too low, a friendly suggestion of $2/mile is generally a rule of thumb.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='6.3.1. Short rides of 4 Miles or less are $8 as this is the minimum.'
        style={INDENT2}
      />
      <Text
        preset='description'
        text='6.3.2. Don’t drive out of your way if you know they are going a short distance.'
        style={INDENT2}
      />
      <Text
        preset='description'
        text='6.4. If a rider cancels on you while you are on your way to the pick up or stiffs you on the ride, do not blast on the ride page. Post to the FB Driver page and let the support team handle it.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='6.5. Drivers will not contact any rider or use any personal information for any reason other than for the purposes of providing the AC Services.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='6.6. Drivers may not transport or allow other individuals other than the rider(s).'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='6.7. Drivers may not allow non-vetted drivers to substitute in their place.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='6.8. Treat riders as if it is their first time ever using the system.'
        style={INDENT1}
      />

      <Text
        preset='description'
        text='7. DRIVERS will not attempt to steal rides, for example:'
      />
      <Text
        preset='description'
        text='7.1. “I’m on my way” as a comment response when the rider has not or did not pick you.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='7.2. Private messaging the pax behind the scene. Keep everything on page (Instant ban)'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='7.3. Heading over to the rider without first being selected as the driver.'
        style={INDENT1}
      />

      <Text preset='description' text='8. CONFLICT OF INTEREST' />
      <Text
        preset='description'
        text='8.1. Privately messaging Riders who post on the Ride Request page, asking them to join another Ride group not affiliated with Arcade City.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='8.2. Posting to the Ride Request page solicitation of other ride services not affiliated with Arcade City.'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='8.3. Blatantly adding Arcade City members to a new page without their knowledge.'
        style={INDENT1}
      />

      <Text
        preset='description'
        text='9. CONSEQUENCES: Breaking of Charter guidelines will result in verbal communication from Austin Support and/or possible consequence of removal from page.'
      />
      <Text
        preset='description'
        text='9.1. Infraction Consequences include'
        style={INDENT1}
      />
      <Text
        preset='description'
        text='9.1.1. 1st offense- Written notice from Support (Possible 1 hour ban)'
        style={INDENT2}
      />
      <Text
        preset='description'
        text='9.1.1.1. Minor infractions such as not posting ETA on posts will result in 1 hour bans for each infraction.'
        style={INDENT3}
      />
      <Text
        preset='description'
        text='9.1.1.2. Unprofessionalism on rider request page.'
        style={INDENT3}
      />
      <Text
        preset='description'
        text='9.1.1.3. Not posting collage.'
        style={INDENT3}
      />
      <Text
        preset='description'
        text='9.1.1.4. “Superman” Syndrome (Commenting on Multiple posts)'
        style={INDENT3}
      />
      <Text
        preset='description'
        text='9.1.2. 2nd offense- Written notice / 1 day ban'
        style={INDENT2}
      />
      <Text
        preset='description'
        text='9.1.2.1. Lying about ETA does lead to rider complaints. Five or more complaints in a 24 hour period would lead to 1 day ban.'
        style={INDENT3}
      />
      <Text
        preset='description'
        text='9.1.2.2. Scheduling a ride ahead of time with rider and driver forgets or cancels last minute, at least 1 day ban. (first offense)'
        style={INDENT3}
      />
      <Text
        preset='description'
        text='9.1.3. 3rd offense- Written notice / 1 week ban'
        style={INDENT2}
      />
      <Text
        preset='description'
        text='9.1.3.1. Three or more complaints of drivers forgetting or cancelling last minute of scheduled rides'
        style={INDENT3}
      />
      <Text
        preset='description'
        text='9.1.4. 4th offense- Written notice / 1 month ban'
        style={INDENT2}
      />
      <Text
        preset='description'
        text='9.1.5. 5th offense- Written notice / 1 year ban'
        style={INDENT2}
      />

      <Text
        preset='description'
        text='10. APPEALS: Drivers may appeal a ban at anytime. Must include evidence on your behalf
        for review by AC Support Team to be voted on for reinstatement of service. Charter Guidelines may be amended at any time to incorporate new guidelines or Mobile App guidelines. Future rideshare laws may dictate changes or amendments to these guidelines.'
      />
    </Screen>
  )
}

const INDENT1 = {
  marginLeft: 20,
}

const INDENT2 = {
  marginLeft: 40,
}

const INDENT3 = {
  marginLeft: 60,
}
