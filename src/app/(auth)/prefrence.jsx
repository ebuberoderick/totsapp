import { View, Text, Image, Animated, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/organisms/Button'
import { useRouter } from 'expo-router'
import UseFormHandler from '../../hooks/useFormHandler'
import { useDispatch } from 'react-redux'
import { updateAppState } from '../../Store/reducers/AppDefault'
import { TouchableOpacity } from 'react-native'
import PrefernceChip from '../../components/organisms/PrefernceChip'

const Location = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const move = () => {
        dispatch(updateAppState({ location: "" }))
        router.replace("/(screen)/")
    }

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

        }
    })



    return (
        <View className="flex-1 pb-16 pt-9 gap-3 justify-center">
            <View className="flex-grow pt-6 px-4">
                <View className="items-end">
                    <TouchableOpacity onPress={() => move()}><Text>Maybe Later</Text></TouchableOpacity>
                </View>
                <View></View>
            </View>
            <View className="gap-7 px-3">
                <Text>Preference</Text>
                <ScrollView className="h-56">
                    <View className="flex-wrap flex-row gap-4">
                        <PrefernceChip />
                        <PrefernceChip />
                        <PrefernceChip />
                        <PrefernceChip />
                        <PrefernceChip />
                        <PrefernceChip />
                        <PrefernceChip />
                    </View>
                </ScrollView>
                <View className="gap-4">
                    <Button processing={formHandler.proccessing} text="continue" onPress={() => formHandler.submit()} />
                </View>
            </View>
        </View>
    )
}

export default Location