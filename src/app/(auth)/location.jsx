import { View, Text, Image, Animated } from 'react-native'
import React, { useState } from 'react'
import AppInput from '../../components/organisms/AppInput'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Button from '../../components/organisms/Button'
import { useRouter } from 'expo-router'
import UseFormHandler from '../../hooks/useFormHandler'
import { useDispatch } from 'react-redux'

const Location = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const formHandler = UseFormHandler({
        required: {
            country: 'Please Select Your Country',
            state: 'Please Select Your State',
            city: 'Please Select Your City',
        },
        initialValues: {
            country: '',
            state: '',
            city: '',
        },

        onSubmit: async (value) => {
            // setFormError("")
            // const { status, data } = await Applogin(value).catch(err => console.log(err))
            // if (status) {
            //     SignInAuth(data, dispatch);
            //     router.replace("/(screen)")
            // } else {
            //     setFormError(data.message);
            // }
            
            dispatch(updateAppState({ location: "/(auth)/prefrence" }))
            router.replace("/(auth)/prefrence")
        }
    })



    return (
        <View className="flex-1 pb-16 gap-3 justify-center">
            <View className="flex-grow justify-center">
                <View>
                    <Animated.Image source={require("../../assets/images/location.png")} className="w-80 duration-1000 animate-bounce mx-auto relative top-12 h-96" />
                </View>
            </View>
            <View className="gap-7 px-3">
                <Text className="text-3xl font-extrabold">Set Location</Text>
                <View className="gap-5">
                    <AppInput error={formHandler.error?.country} onChange={e => formHandler.value.country = e} icon={<Ionicons name="flag-outline" size={35} color={"#9ca3af"} />} placeholder={"Country"} type={"select"} />
                    <AppInput error={formHandler.error?.state} onChange={e => formHandler.value.state = e} icon={<Ionicons name="location-outline" size={25} color={"#9ca3af"} />} placeholder={"State"} type={"select"} />
                    <AppInput error={formHandler.error?.city} onChange={e => formHandler.value.city = e} icon={<MaterialCommunityIcons name="city-variant-outline" size={25} color={"#9ca3af"} />} placeholder={"City"} type={"select"} />
                </View>
                <View className="gap-4">
                    <Button processing={formHandler.proccessing} text="continue" onPress={() => formHandler.submit()} />
                </View>
            </View>
        </View>
    )
}

export default Location