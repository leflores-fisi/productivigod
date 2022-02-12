import { useStore } from "react-redux";

export const useCalendar = () => {
  const store = useStore()
  return store.getState().tabs.find(tab => tab.type === 'CALENDAR_VIEWER').content
}