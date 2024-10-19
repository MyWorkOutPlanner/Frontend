import { View, Text } from 'react-native'
import React, { useEffect ,useState  } from 'react'
import { CustomButton, DividerWithText, FormField, GoogleButton, ScreenWrapper } from '../../components';
import { useRouter } from 'expo-router';


const SingUpFirst = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [ error, setError] = useState({
    email : '',
    type : '',
  })
  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter();
  const submit = () => {
    router.push("/sign-up-two")
     {/* <Button title='home' onPress={()=>router.push("/home")}/> */}
  }
  return (
    <ScreenWrapper >
    <View className=' bg-white h-full w-full flex flex-col mt-0 p-2 justify-center items-center  '>
      <Text className='w-full text-center text-[30px] font-bold font-pbold leading-8'> Sign Up </Text>
      <View className='w-full'>
        <View className='w-full px-2'>
        <FormField
          title="Full Name"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="default"
          placeholder={"Full Name"}
          error={error}
        />
          <FormField
          title="Email Address"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          placeholder={"Email Address"}
          error={error}
        />
         <CustomButton
          title="Continue"
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

export default SingUpFirst