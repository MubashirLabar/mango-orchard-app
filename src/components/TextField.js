import { TextInput, View } from "react-native";
import colors from "style/colors";

function TextField({ className, icon, ...rest }) {
  return (
    <View className="flex flex-row items-center relative">
      <TextInput
        className={`w-full h-[48px] px-[20px] bg-grey-200 rounded-lg font-Regular text-[14px] text-black-700 ${className}`}
        underlineColorAndroid="transparent"
        placeholderTextColor={colors.grey[900]}
        includeFontPadding={false}
        autoCapitalize="none"
        autoCorrect={false}
        {...rest}
      />
      {icon}
    </View>
  );
}

export default TextField;
