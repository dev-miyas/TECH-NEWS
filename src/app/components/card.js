import {Pressable,ImageBackground,View } from 'react-native'
// import useTheme from '../../store/useTheme'
import {LinearGradient} from 'expo-linear-gradient'
import HeroTitle from './heroTitle'
import Caption from './caption'
import Tag from './tag'
import { Alert } from 'react-native';

export default function Card() {
    const source = {
  uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
}
const detailHandler=()=>{
 alert("Card pressed! Navigate to detail screen.");
}
  return (
    <Pressable style={{marginLeft:8, marginTop:10}} onPress={detailHandler}>
    <ImageBackground
     source={source}
  
style={{width:'100%',height:200,marginBottom:16,borderRadius:0,overflow:'hidden'}}
    
   >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={{flex:1}}
         
        >
            <View style={{ height: '100%', justifyContent: 'space-between',marginLeft:16,marginBottom:16}}>
        <Tag tagLabel={"FEATURED"} />
        <View>
        <HeroTitle title={"Frontier lab launches AI-powered coding assistant for developers"} />
        <Caption author={"Erminno"} readTime={"5 min read"} />
        </View>
        </View>
        </LinearGradient>
        </ImageBackground>
    </Pressable>
  )
}

