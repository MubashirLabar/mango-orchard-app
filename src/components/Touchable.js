import * as React from "react";
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const Touchable = ({ children, nativeFeedback, ...rest }) => {
  return nativeFeedback && Platform.OS === "android" ? (
    <TouchableNativeFeedback {...rest}>{children}</TouchableNativeFeedback>
  ) : (
    <TouchableOpacity {...rest}>{children}</TouchableOpacity>
  );
};

export default Touchable;
