import { useState } from "react";
import { View, ScrollView } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Formik } from "formik";
import colors from "style/colors";
import routes from "navigation/routes";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { AppText, TextField, Touchable, AppButton } from "components";
import TextFieldError from "components/TextFieldError";
import { setToStorage } from "utils/common";
import { loginValidation } from "utils/validations/authValidations";
import { setIsUser } from "../../store/reducers/authReducer";
import { auth } from "../../config/firebase";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    password: "",
    email: "",
  };

  const submitForm = async (values) => {
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      setToStorage("isUser", "true");
      dispatch(setIsUser("true"));
      setLoading(false);
      navigation.navigate(routes.MAIN_SCREEN);
      Toast.show({
        type: "success",
        text1: "Login Successfully!",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Please enter correct login credentials",
      });
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <View className="flex-1">
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidation}
        onSubmit={submitForm}
      >
        {({
          handleChange,
          handleSubmit,
          setFieldTouched,
          errors,
          touched,
          values,
        }) => (
          <>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
              <View className="w-full py-8 px-4">
                <View className="mb-8">
                  <AppText className="font-Bold text-[28px] leading-[40px] text-black-700 mb-2">
                    Sign In
                  </AppText>
                  <AppText className="text-[18px]">
                    Please enter your credentials to proceed
                  </AppText>
                </View>
                <View className="w-full gap-6 mb-8">
                  <View className="w-full flex">
                    <TextField
                      placeholder="Enter Your Email"
                      className="mb-0.5"
                      name="email"
                      value={values.email}
                      onBlur={() => setFieldTouched("email")}
                      onChangeText={handleChange("email")}
                    />
                    <TextFieldError
                      error={errors.email}
                      visible={touched.email}
                    />
                  </View>
                  <View className="w-full">
                    <TextField
                      placeholder="Password"
                      className="mb-0.5"
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
                      name="password"
                      value={values.password}
                      onBlur={() => setFieldTouched("password")}
                      onChangeText={handleChange("password")}
                    />
                    <TextFieldError
                      error={errors.password}
                      visible={touched.password}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
            <View className="flex flex-row py-3 px-5">
              <AppButton
                label="Sign In"
                className="mb-6"
                isLoading={loading}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
