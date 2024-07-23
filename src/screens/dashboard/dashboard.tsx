import { Button } from "@/components";
import { PATH } from "@/config";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      Dashboard
      <Button onClick={() => navigate(PATH.LOGIN.path)}>Logout</Button>
    </div>
  );
};
