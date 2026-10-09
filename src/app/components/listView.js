import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { useState,useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Tag from "./tag";
import Caption from "./caption";
import useTheme from "../../store/useTheme";
import { FONTS } from "../../utils/fonts";
import useBookmarkStore from "../../store/useBookmarStore";
import { getItem } from "../../utils/storage";
export default function ListView({
  imageUrl,
  tagLabel,
  title,
  author,
  readTime,
  postedTime,
}) {
  const [isBookmarked,setIsBookmarked]=useState(false);
  const { colors, spacing, fSize } = useTheme();
  const {addBookmark,removeBookmark}=useBookmarkStore()
  const styles = makeStyles(colors);
useEffect(() => {
    const checkBookmark = async () => {
      const bookmarks = await getItem("bookmarks");
      if(bookmarks) {
        const parsedBookmarks = JSON.parse(bookmarks);
        const isBookmarked = parsedBookmarks.some(
          (articleTitle) => { const result = articleTitle === title;
            return result;
          } 
        );

        setIsBookmarked(isBookmarked);
      }
      else {
        setIsBookmarked(false);
      }
    };

    checkBookmark();
  }, [title]);
  const handleBookmark = () => {
    if (isBookmarked) {
        removeBookmark(title);
    } else {
        addBookmark(title);
    }
    setIsBookmarked(!isBookmarked);
  }
  return (
     <>
    <Pressable
      style={styles.container}
      onPress={() =>
        Alert.alert("Card pressed!", "Navigate to detail screen.")
      }
    >
      <View style={{ flex: 1, minWidth: 0, paddingRight: 16 }}>
        <Tag
          tagLabel={tagLabel}
          style={styles.listTag}
          textStyle={styles.listTagText}
        />


        <Text numberOfLines={3} style={styles.title}>
          {title}
        </Text>

        <Caption
  author={author}
  postedTime={postedTime}
  readTime={readTime}
/>
      </View>

      <View style={styles.rightSide}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <Pressable
          style={styles.favorite}
          hitSlop={8}
          
        >
          <Ionicons name={isBookmarked ? "bookmark" : "bookmark-outline"} color={colors.faint} onPress={handleBookmark} />
        </Pressable>
     
      </View>
      
    </Pressable>
    <>
    <View
  style={{
    width: "100%",
    height: 2,
    borderWidth: 1,
    borderColor: colors.rule,
  }}
/>
    </>
   </>
  );
}

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-start",
      width: "100%",
      paddingVertical: 24,
      paddingLeft:10,
     
    },

    listTag: {
      alignSelf: "flex-start",
      backgroundColor: "transparent",
      paddingHorizontal: 0,
      paddingVertical: 0,
      marginTop: 0,
    },

    listTagText: {
      color: colors.ink,
      fontSize: 18,
      lineHeight: 18,
      fontFamily: FONTS.serifItalic,
      paddingRight: 3,
      includeFontPadding: false,
    },

    title: {
      color: colors.ink,
      fontFamily: FONTS.head,
      fontSize: 18,
      lineHeight: 21,
      letterSpacing: -0.3,
      marginTop: 8,
      marginBottom: 12,
    },

    rightSide: {
      alignItems: "flex-end",
      paddingRight:10,
      marginTop:35
    },

    image: {
      width: 64,
      height: 64,
      borderRadius: 2,
      backgroundColor: colors.surface2,
      resizeMode: "cover",
      
    },

    favorite: {
      width: 32,
      height: 32,
      alignItems: "center",
      justifyContent: "flex-end",
      marginTop: 12,
      marginRight: -7,
    },
  });