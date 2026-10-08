import { View, Alert, FlatList, Text, Pressable } from "react-native";
import Today from "../components/today";
import { useTheme } from "../../store/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import Icon from "../components/icon";
import Chips from "../components/chips";
import { Data } from "../../data/data";
import SearchInput from "../components/searchInput";
import { useState } from "react";
import Card from "../components/card";
import { FONTS } from "../../utils/fonts";
import ListView from "../components/listView";
export default function Home() {
  const { colors, fSize, spacing, toggleTheme, themeMode } = useTheme();
  const styles = createStyles(colors, fSize, spacing);
  const [searchValue, setSearchValue] = useState("");
  const Name = themeMode === 'light' ? 'moon-outline' : 'sunny-outline'

  const ListHeaderComponent = () => (
    <View style={styles.listHeaderContainer}>
      <View style={styles.divider} />

      <View style={styles.headerRow}>
        <Text style={styles.listHeaderTitle}>THE FEED</Text>

        <Pressable onPress={() => Alert.alert('See all pressed')}>
          <Text style={styles.seeAll}>SEE ALL</Text>
        </Pressable>
      </View>
        <View
  style={{
    width: "100%",
    height: 2,
    borderWidth: 1,
    borderColor: colors.rule,
    marginTop:12
  }}
/>
    </View>
  );
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
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}

        ListHeaderComponent={
          <>
            <SearchInput
              value={searchValue}
              onChangeText={setSearchValue}
            />
            <Chips />
            <Card title={"Top Stories"} />
            <ListHeaderComponent />

          </>

        }
        renderItem={({ item }) => (
  <ListView
    title={item.title}
    postedTime={item.postedTime}
    readTime={item.readTime}
    tagLabel={item.tagLabel}
    imageUrl={item.imageUrl}
  />
)}
      />


    </SafeAreaView>
  );
}

const createStyles = (colors, fSize, spacing) => ({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: spacing.l,
  },
  listHeaderContainer: {
    marginTop: spacing.l,
    paddingHorizontal: spacing.l,
  },

  divider: {
    width: '100%',
    height: 2,
    marginBottom: spacing.s,
    backgroundColor: colors.ink,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listHeaderTitle: {
    color: colors.ink,
    fontFamily: FONTS.headBlack,
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  seeAll: {
    color: colors.dim,
    fontFamily: FONTS.medium,
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
})