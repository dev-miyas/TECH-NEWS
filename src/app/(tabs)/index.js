import { View, Text } from 'react-native'
import Today from '../components/today'
import {useTheme} from '../../store/useTheme'

export default function Home() {
  const { colors } = useTheme()
  return (
    <View>
      <Text style={{ color: colors.ink }}>Home</Text>
      <Today />
    </View>
  )
}   
    
