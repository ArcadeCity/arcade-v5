import Constants from 'expo-constants'

export const OUR_VERSION_NUMBER = '5.1.0'

export const getConstants = () => {
  const { appOwnership, deviceName, deviceYearClass, isDevice } = Constants

  return {
    appOwnership,
    deviceName,
    deviceYearClass,
    isDevice,
    ourVersionNumber: OUR_VERSION_NUMBER,
  }
}
