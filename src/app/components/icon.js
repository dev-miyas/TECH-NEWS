import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";
import useTheme from "../../store/useTheme";

export default function Icon({ name,action }) {
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);

  return (
    <View style={styles.container}>
      <Ionicons name={name} size={20} color={colors.dim} onPress={action}/>
    </View>
  );
}
const createStyles = (colors, fSize, spacing) =>
  StyleSheet.create({
    container: {
      //   flex: 1,
      backgroundColor: colors.surface,
      height: 35,
      width: 35,
      borderRadius: 10,

      justifyContent: "center",
      alignItems: "center",
    },
  });
