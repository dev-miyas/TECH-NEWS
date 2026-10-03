import { View, Text,StyleSheet } from 'react-native'
import useTheme from '../../store/useTheme'
import { FONTS } from '../../utils/fonts'
export default function Tag({tagLabel}) {
    const{colors,spacing,fSize}=useTheme()
  return (
    <View style={{
  alignSelf: 'flex-start',
  backgroundColor: colors.sig,
  paddingHorizontal: 6,
  paddingVertical: 4,
//   marginLeft: spacing.ml,
  marginTop: spacing.ml,


    }}>
      <Text style={{  color: colors.sigInk,
    color: colors.sigInk,
  fontFamily: FONTS.head,
  fontSize: 10,
  lineHeight: 12,
  letterSpacing: 0.4,
  textTransform: 'uppercase',
  fontSize: 10,
  lineHeight: 12,
  letterSpacing: 0.4,
  textTransform: 'uppercase',}}>{tagLabel}</Text>
    </View>
  )
}
