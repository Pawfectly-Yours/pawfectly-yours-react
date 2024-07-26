import { translate } from "@/i18n";
import { BASE_URL_PREFIX } from "./constants";

export const PATH = {
  HOME: {
    name: translate("routes.home"),
    path: `${BASE_URL_PREFIX}`,
  },
  LOGIN: {
    name: translate("routes.login"),
    path: `${BASE_URL_PREFIX}login`,
  },
  REGISTER: {
    name: translate("routes.register"),
    path: `${BASE_URL_PREFIX}register`,
  },
  DASHBOARD: {
    name: translate("routes.dashboard"),
    path: `${BASE_URL_PREFIX}dashboard`,
  },
  NOTFOUND: {
    name: translate("routes.notFound"),
    path: `${BASE_URL_PREFIX}not-found`,
  },
};
