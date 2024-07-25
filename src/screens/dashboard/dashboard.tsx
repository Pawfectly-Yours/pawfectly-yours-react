import { Button } from "@/components";
import { PATH } from "@/config";
import { translate } from "@/i18n";
import { UserService } from "@/services";
import { useAppStateStore } from "@/stores";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { setLoading } = useAppStateStore();
  const [userData, setUserData] = useState<any>();

  const testFetchAllUser = async () => {
    setLoading(true);
    const result = await UserService.getAllUser();

    setUserData(result);
    setLoading(false);
  };

  return (
    <div>
      {translate("dashboard.title")}
      <Button onClick={() => navigate(PATH.LOGIN.path)}>
        {translate("dashboard.button.login")}
      </Button>
      <Button onClick={testFetchAllUser}>{"test fetch all user"}</Button>

      <div className="">{JSON.stringify(userData?.data?.resultData)}</div>
    </div>
  );
};
