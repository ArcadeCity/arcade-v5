/**
 * Ignore some yellowbox warnings.
 */
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'asmCrypto',
  'Module Tor requires',
  'Require cycle:',
  'o is not a function',
  'WARNING: Multiple instances of Three.js being imported.',
  '[expo-notifications]',
  'Warning: Each child in a list',
  'Cannot update a component',
  "Can't perform",
  'Story with id',
  'VirtualizedLists',
  '[mobx-state-tree] You are trying to read',
  'Did not receive response to',
  'Failed prop type: Invalid',
  'Sending',
  'JSON Parse error: Unr',
])
