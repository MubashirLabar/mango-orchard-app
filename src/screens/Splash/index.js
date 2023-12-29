import { ActivityIndicator, View } from "react-native";
import colors from "../../style/colors";

function SplashScreen() {
  return (
    <View className="flex flex-1 bg-white items-center justify-center">
      <ActivityIndicator size="large" color={colors.primary[700]} />
    </View>
  );
}

export default SplashScreen;
