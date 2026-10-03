import {Pressable,ImageBackground,View } from 'react-native'
// import useTheme from '../../store/useTheme'
import {LinearGradient} from 'expo-linear-gradient'
import HeroTitle from './heroTitle'
import Caption from './caption'
import Tag from './tag'

export default function Card() {
    const source = {
  uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
}
  return (
    <Pressable>
    <ImageBackground
     source={source}
style={{width:'100%',height:200,marginBottom:16,borderRadius:8,overflow:'hidden'}}
    
   >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
         
        >
            <View style={{marginLeft:16}}>
        <Tag tagLabel={"FEATURED"} />
        <HeroTitle title={"Frontier lab launches AI-powered coding assistant for developers"} />
        <Caption author={"Erminno"} readTime={"5 min read"} />
        </View>
        </LinearGradient>
        </ImageBackground>
    </Pressable>
  )
}

