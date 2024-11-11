import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from '../components/organisms/SplashScreen'
import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux'
import { Session } from '../hooks/Auth'

const index = () => {
  const router = useRouter()
  const user = useSelector((state) => state.User);
  const isAuthenticated = Session(user);
  useEffect(() => {
    setTimeout(() => {
      if (isAuthenticated.status === "authenticated") {
        router.replace("/(screen)")
      }else{
        router.replace("/(auth)/login")
      }
    }, 3000);
  }, [])
  return (
    <View className="bg-white flex-1">
      <SplashScreen />
    </View>
  )
}

export default index