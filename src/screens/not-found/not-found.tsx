import { Button } from "@/components";
import { translate } from "@/i18n";

export const NotFound = () => {
  return (
    <div>
      {translate("notFound.pageNotFound")}
      <Button>{translate("notFound.backToHomePage")}</Button>
    </div>
  );
};
