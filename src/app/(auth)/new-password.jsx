import { View, Text, Image, Animated } from 'react-native'
import React, { useState } from 'react'
import AppInput from '../../components/organisms/AppInput'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Button from '../../components/organisms/Button'
import { useRouter } from 'expo-router'
import UseFormHandler from '../../hooks/useFormHandler'
import { TouchableOpacity } from 'react-native'

const ForgotPassword = () => {

    const router = useRouter()

    const formHandler = UseFormHandler({
        required: {
            password: 'Please Enter Your Password',
            cpassword: 'Please Enter Your Password',
        },
        initialValues: {
            password: '',
            cpassword: '',
        },

        onSubmit: async (value) => {
            if (value.password === value.cpassword) {
                router.replace("success")
            } else {
                formHandler.setError((prevState) => ({ ...prevState, cpassword: 'Password Mis-match' }))
            }
        }
    })



    return (
        <View className="flex-1 bg-white pb-16 gap-3 justify-center">
            <View className="flex-grow justify-center">
                <View className="absolute" style={{ top: 50, left: 12 }}>
                    <TouchableOpacity onPress={() => router.back()} style={{ height: 40, width: 40 }} className="items-center justify-center border border-gray-300 rounded-full">
                        <FontAwesome name="angle-left" size={30} style={{ position: 'relative', right: 1 }} />
                    </TouchableOpacity>
                </View>
                <View className="">
                    <Animated.Image source={require("../../assets/images/successkey.png")} style={{width:"90%"}} className="mx-auto relative h-auto" />
                </View>
            </View>
            <View className="gap-7 px-3">
                <Text className="text-2xl font-extrabold">Please enter your new password</Text>
                <Text className="">Don’t worry! Please enter your registered email address below for reset code.</Text>
                <View className="gap-5 pb-9">
                    <AppInput error={formHandler.error?.password} onChange={e => formHandler.value.password = e} icon={<Ionicons name="lock-open-outline" size={25} color={"#9ca3af"} />} placeholder={"Enter New Password"} type={"password"} />
                    <AppInput error={formHandler.error?.cpassword} onChange={e => formHandler.value.cpassword = e} icon={<Ionicons name="lock-open-outline" size={25} color={"#9ca3af"} />} placeholder={"Confirm New Password"} type={"password"} />
                </View>
                <View className="gap-4">
                    <Button processing={formHandler.proccessing} text="continue" onPress={() => formHandler.submit()} />
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword