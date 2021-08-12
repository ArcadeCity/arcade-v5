import { StyleSheet } from 'react-native'
import { spacing } from 'views/theme'

export const styles = StyleSheet.create({
  buttonSpacing: {
    marginVertical: spacing[3],
  },
  container: {
    zIndex: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  containerContent: {
    marginTop: -40,
    width: '100%',
    alignItems: 'center',
  },
  containerInner: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: spacing[7],
  },
  containerText: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: spacing[7],
  },
  logo: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 50,
    lineHeight: 56,
    letterSpacing: 16,
    paddingLeft: 10,
    marginTop: 20,
  },
})
