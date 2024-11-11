import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native';

const AppInput = ({ placeholder, icon, type, error, onChange }) => {
    const [text, setText] = useState("");
    const [showText, setShowText] = useState(true)

    return (
        <View>
            <View className="border flex-row gap-x-1 items-center px-2 border-gray-300 rounded-lg">
                {icon}
                <TextInput
                    placeholder={placeholder}
                    value={text}
                    secureTextEntry={type === "password" && showText}
                    className="py-4 text-2xl flex-grow"
                    onChangeText={text => { setText(text), onChange(text) }}
                />
                {
                    type === "password" && (
                        <TouchableOpacity onPress={() => setShowText(!showText)} >
                            {
                                !showText ? (
                                    <Ionicons name="eye-outline" size={25} />
                                ) : (
                                    <Ionicons name="eye-off-outline" size={25} />
                                )
                            }
                        </TouchableOpacity>
                    )
                }
            </View>
            {error && <Text className="text-red-500 text-sm">{error}</Text>}
        </View>
    )
}

export default AppInput