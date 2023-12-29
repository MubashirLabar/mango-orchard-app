import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import navigationTheme from "./navigationTheme";
import routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "utils/common";
// import { firebase } from "../config/firebase";
import { setIsUser } from "../store/reducers/authReducer";

import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import SplashScreen from "screens/Splash";

const RootStack = createStackNavigator();

function RootNavigation() {
  const dispatch = useDispatch();
  const { isUser } = useSelector((state) => state.authReducer);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const _isUser = await getFromStorage("isUser");
      dispatch(setIsUser(_isUser));
    } catch (error) {
      console.log("Error retrieving isUser from storage:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // console.log("isUser...", isUser);

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator>
        {loading ? (
          <RootStack.Screen
            name={routes.SPLASH_SCREEN}
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : isUser == "true" ? (
          <RootStack.Screen
            name={routes.MAIN_SCREEN}
            component={HomeNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <RootStack.Screen
            name={routes.AUTH}
            component={AuthNavigator}
            options={{
              headerShown: false,
            }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
