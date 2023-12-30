import { AppText } from "components";

function TextFieldError({ error, visible, className }) {
  if (!visible || !error) return null;

  return (
    <AppText className={`text-red-900 text-[14px] ${className}`}>
      {error}
    </AppText>
  );
}

export default TextFieldError;
