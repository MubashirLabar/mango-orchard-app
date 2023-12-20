import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import navigationTheme from "./navigationTheme";
import routes from "./routes";
import LoginScreen from "../screens/Login";
import HomeNavigator from "./HomeNavigator";

const RootStack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={"Login"}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={routes.MAIN_SCREEN}
          component={HomeNavigator}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
