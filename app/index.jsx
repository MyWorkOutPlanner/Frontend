import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useRouter } from "expo-router";
import { icons } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const router = useRouter();
  return (
    <SafeAreaView className="bg-white h-full">
    <View style={styles.container}>
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: "https://videos.pexels.com/video-files/5319426/5319426-uhd_1440_2560_25fps.mp4",
      }}
      resizeMode={ResizeMode.COVER}
      shouldPlay
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
    {/* <View style={styles.overlay}>
      <Text style={styles.mainText}>Workout Planner</Text>
    
     
     
    </View> */}
    <View style={styles.overlay} >

      <Image source={icons.brandLogo} style= {styles.logoImage}  />
     
     
    </View>
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/sign-in")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/sign-up-first")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  mainText: {
    color: "white",
    fontSize: 68,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  tagline: {
    color: "white",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 3, // Adds a shadow effect on Android
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoImage : {
    width: 'full',
    height: 80,
    overflow: 'hidden',

  }
});
