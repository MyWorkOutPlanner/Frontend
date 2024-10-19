import { View } from 'react-native'
import React, { useEffect ,useState  } from 'react'

import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";





const GoogleButton = () => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo,"User")
  const [error, setError] = useState();
  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId: "27521586011-v4o57nv193kpia88qr76edo85mphkmng.apps.googleusercontent.com",
      iosClientId: "27521586011-q55a0bkqea55inpic8v8cbv0k5bcdhe7.apps.googleusercontent.com",
      androidClientId: "27521586011-jne7l1v7btnn4s2gc3ts18p4c3psg7c1.apps.googleusercontent.com"
  
    });
  }
  useEffect(() => {
    configureGoogleSignIn();
  });

  const signIn = async () => {
    console.log("Pressed sign in");

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(JSON.stringify(userInfo),"userInfo")
      setUserInfo(userInfo.user);
      setError();
    } catch (e) {
      console.log(e,"error")
      setError(e);
    }
  };
  const logout = () => {
    setUserInfo(undefined);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };


  return (
   
    <View className='w-14 h-14 bg-slate-400 overflow-hidden rounded-full border-gray-600 border-2 flex items-center justify-center'>
            <GoogleSigninButton
              size={GoogleSigninButton.Size.Icon}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
              style={{width: 68, height : 68}}
          
            />
    </View>
    

  )
}


export default GoogleButton
