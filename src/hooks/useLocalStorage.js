import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const locallyStoredValue = localStorage.getItem(key);
    if (locallyStoredValue) {
      return JSON.parse(locallyStoredValue);
    }

    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(initialValue));
    setValue(value);
  };

  return [value, setLocalStorage];
};

export default useLocalStorage;
