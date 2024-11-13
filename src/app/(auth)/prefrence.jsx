import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/organisms/Button'
import { useRouter } from 'expo-router'
import { useDispatch } from 'react-redux'
import { updateAppState } from '../../Store/reducers/AppDefault'
import { TouchableOpacity } from 'react-native'
import PrefernceChip from '../../components/organisms/PrefernceChip'

const Preference = () => {

    const [processing, setProcessing] = useState(false)
    const [err, setErr] = useState("")
    const [prefernceList, setPrefernceList] = useState(["First Time Mom", "Mom with Autistic kids", "Post Partum Depression", "Mom with Anxiety", "Mom of 2 and above", "Mom with Down Syndrome kids"])
    const [list, setList] = useState([])



    const dispatch = useDispatch()
    const router = useRouter()

    const move = () => {
        dispatch(updateAppState({ location: "" }))
        router.replace("/(screen)/")
    }

    const updateList = (e) => {
        isExist = list.indexOf(e) !== -1;
        if (isExist) {
            setList(prev => prev.filter(item => item !== e));
        } else {
            setList(prev => [...prev, e])
        }
    }

    const submitPrefrence = async () => {
        setProcessing(true)
        setErr("")
        if (list.length > 2) {
            move()
        } else {
            setErr("Please Select at least 3 prefrence")
        }
        setProcessing(false)
    }

    return (
        <View className="flex-1 bg-white pb-16 pt-9 gap-3 justify-center">
            <View className="flex-grow px-4" style={{paddingTop:"10%"}}>
                <View className="items-end">
                    <TouchableOpacity onPress={() => move()}><Text>Maybe Later</Text></TouchableOpacity>
                </View>
                <View style={{ position: 'relative', top: 70, height: "58%", gap: 10 }}>
                    <View className="rounded-full" style={{ width: "70%", height: "120%", marginHorizontal: "auto" }}>
                        <Image source={require("../../assets/images/prefrence.png")} className="mx-auto w-full h-full" />
                    </View>
                    <View>
                        <Text className="text-center font-bold text-3xl"> Hi!👋 Janifer</Text>
                        <Text className="text-center">benjamin@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View className="gap-7 px-3">
                <View className="relative" style={{ top: 30 }}>
                    <Text>Preference</Text>
                    <Text className="text-danger text-sm">{err}</Text>
                </View>
                <ScrollView className="h-64">
                    <View className="flex-wrap pt-3 flex-row gap-4">
                        {
                            prefernceList.map((data, i) => (
                                <PrefernceChip compare={list} onPress={(e) => updateList(e)} key={i} text={data} />
                            ))
                        }
                    </View>
                </ScrollView>
                <View className="gap-4">
                    <Button onPress={submitPrefrence} processing={processing} text="continue" />
                </View>
            </View>
        </View>
    )
}

export default Preference