import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import AppInput from '../../components/organisms/AppInput'
import Button from '../../components/organisms/Button'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const register = () => {


    return (
        <View className="flex-1 gap-3 justify-center px-3">
            <AppInput icon={<Ionicons name="person-circle-outline" size={25} color={"#9ca3af"} />} placeholder={"Username"} />
            <AppInput icon={<Ionicons name="person-circle-outline" size={25} color={"#9ca3af"} />} placeholder={"Email"} />
            <AppInput icon={<Ionicons name="lock-open-outline" size={25} color={"#9ca3af"} />} placeholder={"Password"} type={"password"} />
            <AppInput icon={<Ionicons name="lock-open-outline" size={25} color={"#9ca3af"} />} placeholder={"Comfirm Password"} type={"password"} />
            <Button text="register" />
            <Link href="login" className='w-full' asChild>
                <TouchableOpacity className='w-full py-4'>
                    <Text className="text-center w-full text-2xl">Login</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default register