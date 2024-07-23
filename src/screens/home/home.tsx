import { Button } from "@/components";
import { PATH } from "@/config";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home Page <Button onClick={() => navigate(PATH.LOGIN.path)}>Login</Button>
    </div>
  );
};
