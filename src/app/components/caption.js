

import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../store/useTheme';
import { FONTS } from '../../utils/fonts';

export default function Caption({ author, readTime ,postedTime}) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{author?.toUpperCase()}</Text>

      <View style={[styles.divider, { backgroundColor: colors.faint }]} />

      <Ionicons
        name="time-outline"
        size={12}
        color={colors.faint}
      />

      <Text style={[styles.text, { color: colors.faint }]}>
        {readTime}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
    marginBottom:8
   
  },

  text: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.3,
    color: 'rgba(255,255,255,0.72)',
  },

  divider: {
    width: 2,
    height: 2,
    borderRadius: 0,
  },
});