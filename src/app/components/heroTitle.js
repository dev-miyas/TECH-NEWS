import { Text, StyleSheet } from 'react-native';
import { FONTS } from '../../utils/fonts';

export default function HeroTitle({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontFamily: FONTS.headBlack,
    fontSize: 22,
    fontWeight: '700',
    // marginLeft: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    marginTop: 4,
  },
});
