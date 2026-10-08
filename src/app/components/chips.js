import { StyleSheet,Pressable, Text ,ScrollView} from 'react-native'
import useTheme from '../../store/useTheme'
import { CATEGORIES } from '../../data/catagories';
import { useState } from 'react';

export default function Chips() {
  const { colors, fSize, spacing } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  
  return (
  <ScrollView 
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{marginBottom:spacing.m,marginTop:spacing.m ,flexGrow:0}}
  >
    {CATEGORIES.map((cat) => (
      <Pressable key={cat}
      style={{
      
        backgroundColor: selectedCategory === cat ? colors.ink : colors.surface,
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.s,
        marginRight: spacing.s,
        borderWidth: 0.9,
        // marginRight: spacing.sm,  
        marginTop: spacing.sm,
        marginLeft: spacing.l, 
        borderColor: colors.ruleStrong, 

      }}
      onPress={() => setSelectedCategory(cat)}
      >
        <Text style={{color: selectedCategory === cat ? colors.surface : colors.ink}}>{cat}</Text>
      </Pressable>
    ))}
  </ScrollView>
);
   
  
}