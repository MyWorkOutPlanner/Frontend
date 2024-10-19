import { View, Text } from 'react-native'
import React, { useState  } from 'react'
import { CustomButton, DividerWithText, FormField, GoogleButton, ScreenWrapper } from '../../components';




const SingIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [ error, setError] = useState({
    email : '',
    type : '',
  })
  const [isSubmitting, setSubmitting] = useState(false);

const submit = () => {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const passwordRegex = /^(?=(.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{2,}))[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
 if (!emailRegex.test(form.email))  {
  setError({
    error : 'Please enter a valid email address',
    type : 'Email'
  }); 
  return
}
if(!passwordRegex.test(form.password)){
  setError({
    error : 'Please enter a valid Password ',
    type : 'Password'
  }); 
  return
}
  setError(''); 
}
  return (
   
    <ScreenWrapper >
      <View className=' bg-white h-full w-full flex flex-col mt-0 p-2 justify-center items-center  '>
        <Text className='w-full text-center text-[30px] font-bold font-pbold leading-8'> Sign In </Text>
        <View className='w-full'>
          <View className='w-full px-2'>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder={"Email Address"}
            error = { error}
          />
            <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder={"Enter password"}
            error = {error}
          />
           <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          </View>
        </View>
        <View className='flex flex-col justify-center w-full my-4 items-center' >
          <Text className='text-[14px] text-center text-primary-100'> Don't have an account? <Text className='text-black-200 text-[16px] font-medium'> Create Account</Text></Text>
          <DividerWithText text='Or'></DividerWithText>
          <GoogleButton/>

        </View>
      </View>

   
    </ScreenWrapper>
    

  )
}


export default SingIn
