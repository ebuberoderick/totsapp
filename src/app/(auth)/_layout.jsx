import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'

const _layout = () => {
  return <Tabs tabBar={() => {}} screenOptions={{headerShown:false}} />
}

export default _layout