import { View, Text } from "react-native";
import Today from "../components/today";
import { useTheme } from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import Icon from "../components/icon";
export default function Home() {
  const { colors, fSize, spacing } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  return (
    <SafeAreaView style={styles.container}>
      <Today />
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:spacing.m,marginBottom:spacing.m}}>

      <Header header="Tech news" />


      <View style={{ flexDirection: "row", gap: spacing.s }}>
      <Icon name="moon-outline" />
      <Icon name="notifications-outline" />
      </View>
         </View>
    </SafeAreaView>
  );
}
const createStyles = (colors, fSize, spacing) => ({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: spacing.l,
   
  },
});
