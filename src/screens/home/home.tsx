import { Button } from "@/components";
import { PATH } from "@/config";
import { translate } from "@/i18n";
import { useAppStateStore } from "@/stores";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { setLoading } = useAppStateStore();

  return (
    <div className="m-4">
      {translate("home.title")}
      <div className="flex gap-2 mt-4">
        <Button onClick={() => navigate(PATH.LOGIN.path)}>
          {translate("home.button.login")}
        </Button>
        {/* TODO:: to be deleted this is only for testing loading mask */}
        <Button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 3000);
          }}
        >
          Click to test Loading in 3 seconds
        </Button>
      </div>
    </div>
  );
};
