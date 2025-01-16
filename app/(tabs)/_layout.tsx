import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='index' options={{
        title: '首页',
        tabBarIcon: ({ color }) => (
          <Ionicons name='home-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='cart' options={{
        title: '购物车',
        tabBarBadge: 3,
        tabBarIcon: ({ color }) => (
          <Ionicons name='cart-outline' size={22} color={color} />
        )
      }} />

      <Tabs.Screen name='profile' options={{
        title: '我的',
        tabBarIcon: ({ color }) => (
          <Ionicons name='person-outline' size={22} color={color} />
        )
      }} />
    </Tabs>
  );
}
