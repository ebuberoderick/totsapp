import { View, Text, TouchableOpacity, BackHandler, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AppInput from '../../components/organisms/AppInput'
import Ionicons from "react-native-vector-icons/Ionicons"
import Button from '../../components/organisms/Button'
import { Link, useRouter } from 'expo-router'
import UseFormHandler from '../../hooks/useFormHandler'
import { Applogin } from '../../services/authService'
import { SignInAuth } from '../../hooks/Auth'
import { useDispatch } from 'react-redux'
import AppModal from '../../components/organisms/AppModal'


const login = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const [formError, setFormError] = useState("")

  const formHandler = UseFormHandler({
    required: {
      email: 'Please Enter Your Email',
      password: 'Please Enter Your Password',
    },

    // if you want to set some default value 
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (value) => {
      setFormError("")
      const { status, data } = await Applogin(value).catch(err => console.log(err))
      if (status) {
        SignInAuth(data, dispatch);
        router.replace("/(screen)")
      } else {
        setFormError(data.message);
      }
    }
  })



  return (
    <View className="flex-1 gap-3 justify-center px-3">
      {formError && <Text className="text-red-500">{formError}</Text>}
      <AppInput error={formHandler.error?.email} onChange={e => formHandler.value.email = e} icon={<Ionicons name="lock-open-outline" size={25} color={"#9ca3af"} />} placeholder={"Email"} />
      <AppInput error={formHandler.error?.password} onChange={e => formHandler.value.password = e} icon={<Ionicons name="lock-open-outline" size={25} color={"#9ca3af"} />} placeholder={"Password"} type={"password"} />
      <Button processing={formHandler.proccessing} text="login" onPress={() => formHandler.submit()} />
      <Link href="register" className='w-full' asChild>
        <TouchableOpacity className='w-full py-4'>
          <Text className="text-center w-full text-2xl">Register</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default login