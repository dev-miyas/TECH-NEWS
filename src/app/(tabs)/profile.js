import { View, Text ,Button} from 'react-native'
import useTheme from "../../store/useTheme"
export default function Profile() {
    const {toggleTheme}=useTheme()
  return (
    <View>
      <Text>Home</Text>
      <Button title="change apperance" onPress={toggleTheme}/> 
    </View>
  )
}