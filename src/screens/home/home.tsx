import { Button } from "@/components";
import { PATH } from "@/config";
import { translate } from "@/i18n";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {translate("home.title")}{" "}
      <Button onClick={() => navigate(PATH.LOGIN.path)}>
        {translate("home.button.login")}
      </Button>
    </div>
  );
};
