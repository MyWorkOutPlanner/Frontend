import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { useEffect ,useState  } from 'react'
import { CustomButton, DividerWithText, FormField, ScreenWrapper } from '../../components';


function signUpTwo() {
    const [userInfo, setUserInfo] = useState(null);
    const [form, setForm] = useState({
        email: "",
        password: "",
      });
      const [isSubmitting, setSubmitting] = useState(false);
  return (
    <ScreenWrapper >
    <View className=' bg-white h-full w-full flex flex-col mt-0 p-2 justify-center items-center  '>
      <Text className='w-full text-center text-[30px] font-bold font-pbold leading-8'> Sign In </Text>
      <View className='w-full'>
        <View className='w-full px-2'>
        <FormField
          title="New Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          placeholder={"New Password"}
        />
          <FormField
          title="Confirm Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          placeholder={"Confirm Password"}
        />
         <CustomButton
          title="Continue"
          // handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        </View>
      </View>
     
    </View>

 
  </ScreenWrapper>
  )
}

export default signUpTwo
