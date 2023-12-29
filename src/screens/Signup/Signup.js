import { useState } from "react";
import { View, ScrollView } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Formik } from "formik";
import colors from "style/colors";
import routes from "navigation/routes";
import Toast from "react-native-toast-message";
import {
  AppText,
  TextField,
  Touchable,
  AppButton,
  ErrorMessage,
} from "components";
import { loginValidation } from "utils/validations/authValidations";
import { auth } from "../../config/firebase";

export default function Signup({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);

  const initialValues = {
    password: "",
    email: "",
  };

  const submitForm = async (values) => {
    try {
      await auth.createUserWithEmailAndPassword(values.email, values.password);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Something want wrong!",
      });
      console.error(error.message);
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
                    Sign Up
                  </AppText>
                  <AppText className="text-[18px]">Create your account</AppText>
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
                    <ErrorMessage
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
                    <ErrorMessage
                      error={errors.password}
                      visible={touched.password}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
            <View className="flex flex-row py-3 px-5">
              <AppButton
                label="Sign Up"
                className="mb-6"
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
