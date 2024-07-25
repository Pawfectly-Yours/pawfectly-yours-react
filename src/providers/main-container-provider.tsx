import { DEV_MODE } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface MainContainerProviderInterface {
  children: React.ReactNode;
}

export const MainContainerProvider = ({
  children,
}: MainContainerProviderInterface) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={DEV_MODE == "development"} />
      <div>{children}</div>;
    </QueryClientProvider>
  );
};
