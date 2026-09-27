import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import useTheme from '../../store/useTheme'
import { FONTS } from '../../utils/colors'

export default function TabsLayout() {
  const { colors } = useTheme()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: colors.ink,
        tabBarInactiveTintColor: colors.faint,

        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.rule,
          borderTopWidth: 1,
          elevation: 0,
        },

        tabBarLabelStyle: {
          fontFamily: FONTS.medium,
          fontSize: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <Feather name="bookmark" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}