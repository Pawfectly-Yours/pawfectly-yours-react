import { Button } from "@/components";
import { PATH } from "@/config";
import { translate } from "@/i18n";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      {translate("dashboard.title")}
      <Button onClick={() => navigate(PATH.LOGIN.path)}>
        {translate("dashboard.button.login")}
      </Button>
    </div>
  );
};
