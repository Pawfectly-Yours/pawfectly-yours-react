import { Button } from "@/components";
import { LoginComponent } from "./components";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/config";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <LoginComponent />
      Login Page
      <Button onClick={() => navigate(PATH.DASHBOARD.path)}>Dashboard</Button>
      <Button onClick={() => navigate(PATH.REGISTER.path)}>Register</Button>
    </div>
  );
};
