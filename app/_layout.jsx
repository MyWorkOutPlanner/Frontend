import { SplashScreen, Stack } from 'expo-router'
import {useEffect} from 'react'
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import store from '../context/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const RootPage = () => {
  const [fontsLoaded, error] = useFonts({
    "Overpass-Black": require("../assets/fonts/Overpass-Black.ttf"),
    "Overpass-Bold": require("../assets/fonts/Overpass-Bold.ttf"),
    "Overpass-ExtraBold": require("../assets/fonts/Overpass-ExtraBold.ttf"),
    "Overpass-ExtraLight": require("../assets/fonts/Overpass-ExtraLight.ttf"),
    "Overpass-Light": require("../assets/fonts/Overpass-Light.ttf"),
    "Overpass-Medium": require("../assets/fonts/Overpass-Medium.ttf"),
    "Overpass-Regular": require("../assets/fonts/Overpass-Regular.ttf"),
    "Overpass-SemiBold": require("../assets/fonts/Overpass-SemiBold.ttf"),
    "Overpass-Thin": require("../assets/fonts/Overpass-Thin.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <SafeAreaProvider>
    <ErrorBoundary>
       <Provider store={store}>
        <Stack  screenOptions={{
        headerTitle:'',
        headerStyle: {
          backgroundColor: '#ffff',
        },}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: true }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </ErrorBoundary>
    </SafeAreaProvider>
  
  )
}

export default RootPage
