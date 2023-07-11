import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {

  const [value, setValue] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem(key));

    if (localValue === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;

    } else {
      return localValue;
    }
  });
  
  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}