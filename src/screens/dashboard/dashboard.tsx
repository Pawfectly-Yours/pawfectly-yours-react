import { Button } from "@/components";
import { API_INTERVAL, API_RETRY_DELAY, API_STALE_TIME, PATH } from "@/config";
import { translate } from "@/i18n";
import { UserService } from "@/services";
import { useAppStateStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { setLoading } = useAppStateStore();
  const [isFirstFetch, setIsFirstFetch] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>();

  // NOTE:: example of useQuery
  const userQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return await UserService.getAllUser();
    },
    enabled: isFirstFetch,
    refetchInterval: API_INTERVAL,
    retry: 3,
    retryDelay: API_RETRY_DELAY,
    staleTime: API_STALE_TIME,
  });

  useEffect(() => {
    if (userQuery.isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [userQuery.isLoading]);

  useEffect(() => {
    if (userQuery.data) {
      setUserData(userQuery.data);
    }
  }, [userQuery.data]);

  return (
    <div>
      {translate("dashboard.title")}
      <Button onClick={() => navigate(PATH.LOGIN.path)}>
        {translate("dashboard.button.login")}
      </Button>
      <Button
        onClick={() => {
          setIsFirstFetch(true);
          userQuery.refetch();
        }}
      >
        {"test fetch all user"}
      </Button>

      <div className="">{JSON.stringify(userData?.resultData)}</div>
    </div>
  );
};
