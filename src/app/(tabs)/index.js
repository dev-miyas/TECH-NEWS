import { View, Alert } from "react-native";
import Today from "../components/today";
import { useTheme } from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import Icon from "../components/icon";
import Chips from "../components/chips";
import SearchInput from "../components/searchInput";
import { useState } from "react";
import Card from "../components/card";
export default function Home() {
  const { colors, fSize, spacing, toggleTheme,themeMode } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const [searchValue, setSearchValue] = useState("");
  const Name=themeMode==='light' ? 'moon-outline':'sunny-outline'
  function notify() {
    Alert.alert(
      "Notification button pressed",
      "You pressed the notification button!"
    );
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
          <Icon name={Name} action={toggleTheme} />
          <Icon name="notifications-outline" action={notify} />
        </View>
      </View>

      <SearchInput
        value={searchValue}
        onChangeText={setSearchValue}
      />
      <Chips />
      <Card />
      
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