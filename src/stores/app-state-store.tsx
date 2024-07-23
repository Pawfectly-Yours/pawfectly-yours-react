import { create } from "zustand";

interface AppStateStoreInterface {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const DEFAULT_LOADING: boolean = false;

const useAppStateStore = create<AppStateStoreInterface>((set) => ({
  loading: DEFAULT_LOADING,
  setLoading: (loading: boolean) => set({ loading }),
}));

export { useAppStateStore };
export type { AppStateStoreInterface };
