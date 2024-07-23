import { useAppStateStore } from "@/stores";
import { PuffLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

export const LoadingMask = () => {
  const { loading } = useAppStateStore();

  return (
    <div
      className={twMerge(
        "w-screen h-screen fixed z-50 bg-background/50 cursor-progress flex justify-center items-center",
        loading ? "fixed" : "hidden"
      )}
    >
      <PuffLoader
        color={"#0F172A"}
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
