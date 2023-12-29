import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const AppButton = ({
  label = "Button",
  isLoading,
  type = "primary",
  className,
  labelStyle,
  ...rest
}) => {
  const _style =
    type === "transparent"
      ? "bg-transparent border-0"
      : type === "hole"
      ? "bg-transparent"
      : "bg-black-700";

  const _textStyle =
    type === "transparent"
      ? "text-black-700"
      : type === "hole"
      ? "text-black-700"
      : "";

  return (
    <TouchableOpacity
      className={`w-full h-[56px] flex flex-row items-center justify-center py-[10px] border-[1px] border-transparent rounded-[50px] ${_style} ${className}`}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text
          className={`font-Medium text-white text-[18px] leading-[24px] tracking-[0.5px] ${_textStyle} ${labelStyle}`}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
