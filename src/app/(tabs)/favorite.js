import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import { useTheme } from "../../store/useTheme";

export default function Favorite() {
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  return (
    <SafeAreaView style={styles.container}>
      <Header header="Favorite" />
    </SafeAreaView>
  );
}
const createStyles = (colors, fSize, spacing) => ({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    color: colors.ink,
  },
});