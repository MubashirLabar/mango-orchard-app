import { StatusBar, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import { styles } from "../style";
import LoginScreen from "screens/auth/login";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <SafeAreaView
    style={{ paddingTop: styles.statusBarHeight }}
    className="flex flex-1 bg-grey-100"
  >
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="dark-content"
    />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  </SafeAreaView>
);

export default AuthNavigator;
