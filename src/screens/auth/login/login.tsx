import { Button } from "@/components";
import { LoginComponent } from "./components";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/config";
import { translate } from "@/i18n";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <LoginComponent />
      {translate("auth.login.title")}
      <Button onClick={() => navigate(PATH.DASHBOARD.path)}>
        {translate("auth.login.button.dashboard")}
      </Button>
      <Button onClick={() => navigate(PATH.REGISTER.path)}>
        {translate("auth.login.button.register")}
      </Button>
    </div>
  );
};
