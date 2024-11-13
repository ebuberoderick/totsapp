import { View, Text, Image, Animated } from 'react-native'
import React, { useState } from 'react'
import AppInput from '../../components/organisms/AppInput'
import Feather from 'react-native-vector-icons/Feather'
import Button from '../../components/organisms/Button'
import { useRouter } from 'expo-router'
import UseFormHandler from '../../hooks/useFormHandler'
import { useDispatch } from 'react-redux'
import { updateAppState } from '../../Store/reducers/AppDefault'

const Location = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const formHandler = UseFormHandler({
        required: {
            email: 'Please Enter Your Email',
        },
        initialValues: {
            email: ''
        },

        onSubmit: async (value) => {
            console.log(value);
            
            // dispatch(updateAppState({ location: "/(auth)/prefrence" }))
            // router.replace("/(auth)/prefrence")
        }
    })



    return (
        <View className="flex-1 bg-white pb-16 gap-3 justify-center">
            <View className="flex-grow justify-center">
                
                <View>
                    <Animated.Image source={require("../../assets/images/keypadlock.png")} className="w-80 mx-auto relative h-96" />
                </View>
            </View>
            <View className="gap-7 px-3">
                <Text className="text-3xl font-extrabold">Forgot password?</Text>
                <Text className="">Don’t worry! Please enter your registered email address below for reset code.</Text>
                <View className="gap-5 pb-9">
                    <AppInput error={formHandler.error?.email} onChange={e => formHandler.value.email = e} icon={<Feather name="mail" size={20} color={"#9ca3af"} />} placeholder={"Enter Email"} />
                </View>
                <View className="gap-4">
                    <Button processing={formHandler.proccessing} text="continue" onPress={() => formHandler.submit()} />
                </View>
            </View>
        </View>
    )
}

export default Location