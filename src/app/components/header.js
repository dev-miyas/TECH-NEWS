import { StyleSheet, Text } from "react-native";
import useTheme from "../../store/useTheme";
import { FONTS } from "../../utils/fonts";

export default function Header({ header }) {
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  return <Text style={styles.header}>{header}</Text>;
}
const createStyles = (colors, fSize, spacing) => ({
  header: {
    color: colors.ink,
    fontFamily: FONTS.headBlack,
    fontSize: fSize.xxx,
    // lineHeight: 24,
    letterSpacing: -1.2,
    paddingLeft: spacing.x,
    // marginTop: spacing.l,
    fontWeight: "700",
   
  },
});

