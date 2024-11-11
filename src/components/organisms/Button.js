import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = ({ text, onPress, processing }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`border-2 ${processing ? "bg-gray-300 border-gray-100":"bg-black border-gray-500"}  py-4 rounded-lg`}>
      <Text className="text-2xl text-white backdrop-blur-md text-center font-bold capitalize"> { processing ? "Processing..." : text}</Text>
    </TouchableOpacity>
  )
}

export default Button