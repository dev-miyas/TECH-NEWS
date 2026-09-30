import {day,month,date} from '../../utils/date'
import { View, Text ,StyleSheet} from 'react-native'
import useTheme from '../../store/useTheme'
export default function Today() {
    const { colors, } = useTheme()
    return (
        <View>
            
            <Text style={{ color: colors.ink }}>{day}, {month} {date}</Text>
        </View>
    );
}