import { Button } from "@/components";
import { PATH } from "@/config";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      Register <Button onClick={() => navigate(PATH.LOGIN.path)}>Login</Button>
    </div>
  );
};
