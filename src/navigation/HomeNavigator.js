import { StatusBar, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import { styles } from "../style";
import HomeScreen from "screens/Home";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <SafeAreaView
    style={{ paddingTop: styles.statusBarHeight }}
    className="flex flex-1"
  >
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="dark-content"
    />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  </SafeAreaView>
);

export default HomeNavigator;
