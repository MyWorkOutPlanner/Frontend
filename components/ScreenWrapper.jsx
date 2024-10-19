import { SafeAreaView } from "react-native-safe-area-context";

export default  ScreenWrapper = ({ children, className }) => (
    <SafeAreaView className = {`flex-1 bg-white mt-0 ${className}`}>
      {children}
    </SafeAreaView>
  );