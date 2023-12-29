import { AppText } from "components";

function ErrorMessage({ error, visible, className }) {
  if (!visible || !error) return null;

  return (
    <AppText className={`text-red-900 text-[14px] ${className}`}>
      {error}
    </AppText>
  );
}

export default ErrorMessage;
