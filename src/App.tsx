import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n";
import { MainContainerProvider } from "./providers";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        {/* TODO:: add loading mask here */}
        {/* TODO:: add global helmet here */}
        <MainContainerProvider>
          <AppRoutes />
        </MainContainerProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
