import { useStore } from "react-redux";

export const useUser = () => {
  const store = useStore()
  return store.getState().user;
}
