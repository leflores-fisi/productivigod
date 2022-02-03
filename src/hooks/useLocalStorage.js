import { useState } from "react";

function useLocalStorage(key, initialValue) {
  
  const [value, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (!item) {
        localStorage.setItem(key, initialValue);
        return initialValue;
      }
      else return item;
    }
    catch (error) {
      console.warn('Error trying to get a localStorage value: ', error);
      return initialValue;
    }
  });

  const setValue = (new_value) => {
    try {
      setStoredValue(new_value);
      localStorage.setItem(key, new_value);
    }
    catch (error) {
      console.warn('Error trying to set a localStorage value: ', error);
    }
  }

  return [value, setValue];
}

export default useLocalStorage;