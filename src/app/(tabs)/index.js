import { View, Text ,Alert} from "react-native";
import Today from "../components/today";
import { useTheme } from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import Icon from "../components/icon";

import SearchInput from "../components/searchInput";
import { useState } from "react";
export default function Home() {
  const { colors, fSize, spacing,toggleTheme } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const [searchValue, setSearchValue] = useState("");
  function notify() {
    Alert.alert("Notification button pressed", "You pressed the notification button!");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Today />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: spacing.m,
          marginBottom: spacing.m,
        }}
      >
        <Header header="Tech news" />

        <View style={{ flexDirection: "row", gap: spacing.s }}>
          <Icon name="moon-outline" action={toggleTheme}/>
          <Icon name="notifications-outline" action={notify} />
        </View>
      </View>
      <SearchInput value={searchValue} onChangeText={setSearchValue} />
    </SafeAreaView>
  );
}
const createStyles = (colors, fSize, spacing) => ({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: spacing.xl,
    width: "100%",
  },
});
