import { APiResulstModel } from "@/config";
import { axiosInstance } from "@/services/axios-instance";

const getAllUser = async (): Promise<APiResulstModel<any>> => {
  // TODO:: add constand in api-url config
  return axiosInstance
    .get("admin/user/get-all")
    .then((response) => response.data);
};

export const UserService = {
  getAllUser,
};
