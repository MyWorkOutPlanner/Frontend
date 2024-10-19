import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className="text-base  text-[16px] text-black-100 font-pmedium font-medium ">{title}</Text>
      
      <View className={`w-full h-16 px-4 bg-gray-200 rounded-2xl border-2 border-gray-300 ${error.error ? "border-rose-500" : "focus:border-primary "}  flex flex-row items-center`}>
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && error.error  && error.type === title &&   (
          <Text className={'text-red-400'}>{error.error}</Text>
        )}
    </View>
  );
};

export default FormField;