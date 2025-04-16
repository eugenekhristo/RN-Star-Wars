import { COLORS } from '@/constants/colors';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontWeight: '700',
        },
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.text,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.inactive,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="films"
        options={{
          title: 'All Films',
          tabBarLabel: 'Films',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="people"
        options={{
          title: 'Characters',
          tabBarLabel: 'People',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'My Favorites',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
