import { useState } from "react";
import { View, ScrollView } from "react-native";
import { AppText, TextField, Touchable, AppButton } from "components";
import FeatherIcon from "react-native-vector-icons/Feather";
import colors from "style/colors";
import routes from "navigation/routes";

export default function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <ScrollView className="flex-1">
      <View className="w-full py-8 px-4">
        <View className="items-center justify-center mb-8">
          <AppText className="font-Bold text-[24px] leading-[36px] text-black-700 mb-3">
            Sign In
          </AppText>
          <AppText className="text-[16px]">
            Please enter your credentials to proceed
          </AppText>
        </View>
        <View className="w-full gap-6 mb-8">
          <View className="w-full">
            <TextField placeholder="Enter Your Email" />
          </View>
          <View className="w-full">
            <TextField
              placeholder="Password"
              className="mb-2"
              secureTextEntry={showPassword}
              icon={
                <Touchable
                  className="absolute right-4 top-[15px]"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <FeatherIcon
                    name={showPassword ? "eye-off" : "eye"}
                    size={20}
                    color={colors.grey[900]}
                  />
                </Touchable>
              }
            />
          </View>
        </View>
        <AppButton
          label="Sign In"
          className="mb-6"
          onPress={() => navigation.navigate(routes.MAIN_SCREEN)}
        />
      </View>
    </ScrollView>
  );
}
