import { Platform, StatusBar } from "react-native";
import colors from "./colors";

export const styles = {
  statusBarHeight: Platform.OS === "ios" ? 40 : StatusBar.currentHeight,
  buttonPrimaryShadow: {
    shadowColor: colors.primary[700],
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 10,
  },
  buttonSecondaryShadow: {
    shadowColor: colors.black[700],
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 10,
  },
};
