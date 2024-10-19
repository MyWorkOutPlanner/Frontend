import { Redirect, Stack } from "expo-router";



export default  () => {


  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
      
        />
        <Stack.Screen
          name="sign-up-first"
          options={{
            headerShown: false,
          }}
          
        />
        <Stack.Screen
          name="sign-up-two"
          options={{
            headerShown: false,
          }}
          
        />
      </Stack>

      {/* <Loader isLoading={loading} /> */}
      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </>
  );
};

