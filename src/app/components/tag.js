import { View, Text, StyleSheet } from "react-native";
import useTheme from "../../store/useTheme";
import { FONTS } from "../../utils/fonts";

export default function Tag({ tagLabel, style, textStyle }) {
  const { colors, spacing, fSize } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.sig,
          marginTop: spacing.ml,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: colors.sigInk,
          },
          textStyle,
        ]}
      >
        {tagLabel}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  text: {
    fontFamily: FONTS.head,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
});