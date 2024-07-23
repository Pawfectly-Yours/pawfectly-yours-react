import { Button } from "@/components";
import { PATH } from "@/config";
import { translate } from "@/i18n";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      {translate("auth.register.title")}{" "}
      <Button onClick={() => navigate(PATH.LOGIN.path)}>
        {translate("auth.login.button")}
      </Button>
    </div>
  );
};
