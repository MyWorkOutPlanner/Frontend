import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect ,useState  } from 'react'
import { StatusBar } from "expo-status-bar";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useRouter } from 'expo-router';



const SingIn = () => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();
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
    <View style={styles.container}>
      {userInfo ? (
        <Button title="Logout" onPress={logout} />
      ) : (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
        
      )}
  <Button title='home' onPress={()=>router.push("/home")}/>
      <StatusBar style="auto" />
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SingIn
