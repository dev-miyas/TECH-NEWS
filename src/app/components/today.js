import { day, month, date } from "../../utils/date";
import { View, Text, StyleSheet } from "react-native";
import useTheme from "../../store/useTheme";
import { FONTS } from "../../utils/fonts";

export default function Today() {
  const { colors, fSize, spacing } = useTheme();
  const styles = StyleSheet.create({
    dateText: {
      marginTop: spacing.x,
      fontFamily: FONTS.medium,
      fontSize: fSize.sm,
      paddingLeft: spacing.x,
      lineHeight: 16,
      letterSpacing: 0.8,
      textTransform: "uppercase",
      // opacity: 0.65,
      color: colors.faint,
    },
  });
  return (
    <Text style={styles.dateText}>
      {day}, {month} {date}
    </Text>
  );
}
