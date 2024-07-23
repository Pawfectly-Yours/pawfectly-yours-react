import { Button } from "./components";
import { translate } from "./i18n";

function App() {
  return (
    <>
      <Button>{translate("helloWorld")}</Button>
    </>
  );
}

export default App;
