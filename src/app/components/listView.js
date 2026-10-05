import { View, Text,Image,Pressable ,Alert} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import useTheme from '../../store/useTheme'
import Tag from './tag'
import Caption from './caption'

export default function ListView({imageUrl, tagLabel, title, author, readTime,postedTime}) {
const { colors, fSize, spacing } = useTheme();
  return (
    <View style={{flexDirection:'row',alignItems:'flex-start',paddingVertical:spacing.m}}>
      <Pressable onPress={() => Alert.alert('Card pressed!', 'Navigate to detail screen.')}>
        <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 200 }} />
      </Pressable>
    <Tag/>
    <Text>Title of news article</Text>
    <Caption/>
    <Ionicons name="bookmark-outline" size={24} color={colors.ink} />
    </View>
  )
}