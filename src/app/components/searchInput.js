import { View, Text, TextInput, StyleSheet ,Alert} from "react-native";
import Icon from "./icon";
import useTheme from "../../store/useTheme";
import { FONTS } from "../../utils/fonts";
export default function searchInput({ value, onChangeText }) {
  const { colors, fsize, spacing } = useTheme();
  const styles = createStyles(colors, fsize, spacing);
  function handleSearch() {
    Alert.alert(`you are Searching for: ${value}`);
  }
  return (
    <View style={styles.container}>
      <Icon name="search-outline" action={handleSearch} />
      <TextInput
        placeholder="Search stories,authors,tags"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.ruleStrong}
      />
    </View>
  );
}
const createStyles = (colors, fsize, spacing) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      height: 44,
      paddingHorizontal: 12,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.ruleStrong,
      marginLeft: spacing.xl,
    },

    input: {
      flex: 1,
      color: colors.ink,
      fontFamily: FONTS.medium,
      fontSize: 15,
      paddingVertical: 0,
    },
  });
