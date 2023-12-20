import { View } from "react-native";
import { useFonts } from "expo-font";
import Toast, { SuccessToast, ErrorToast } from "react-native-toast-message";
import RootNavigation from "./src/navigation/RootNavigation";
import colors from "./src/style/colors";

export default function App() {
  const [loadedFonts] = useFonts({
    FontLight: require("./src/assets/fonts/TTNorms-Light.otf"),
    FontRegular: require("./src/assets/fonts/TTNorms-Regular.otf"),
    FontMedium: require("./src/assets/fonts/TTNorms-Medium.otf"),
    FontBold: require("./src/assets/fonts/TTNorms-Bold.otf"),
    FontExtraBold: require("./src/assets/fonts/TTNorms-ExtraBold.otf"),
  });

  if (!loadedFonts) {
    return null;
  }

  const toastStyle = {
    zIndex: 9999,
    borderLeftWidth: 0,
    borderWidth: 0,
    height: 48,
    borderRadius: 15,
    elevation: 0,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  };

  const contentContainerStyle = {
    paddingHorizontal: 16,
  };

  const text1Style = {
    fontSize: 14,
    lineHeight: 20,
    color: colors.white,
    fontWeight: 400,
    fontFamily: "FontRegular",
  };

  const text2Style = {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 400,
    fontFamily: "FontRegular",
  };

  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `SuccessToast` component
    */
    success: (props) => (
      <SuccessToast
        {...props}
        style={[toastStyle, { backgroundColor: colors.green[700] }]}
        contentContainerStyle={contentContainerStyle}
        text1Style={text1Style}
        text2Style={text2Style}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
      <ErrorToast
        {...props}
        style={[toastStyle, { backgroundColor: colors.red[700] }]}
        contentContainerStyle={contentContainerStyle}
        text1Style={text1Style}
        text2Style={text2Style}
      />
    ),

    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.

      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    // tomatoToast: ({ text1, props }) => (
    //   <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
    //     <Text>{text1}</Text>
    //     <Text>{props.uuid}</Text>
    //   </View>
    // ),
  };

  return (
    <View className="flex-1">
      <View className="z-[9999]">
        <Toast config={toastConfig} />
      </View>
      <RootNavigation />
    </View>
  );
}
