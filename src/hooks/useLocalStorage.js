import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const locallyStoredValue = window.localStorage.getItem(key);
    if (locallyStoredValue) {
      return JSON.parse(locallyStoredValue);
    }

    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setLocalStorage = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setLocalStorage];
};

export default useLocalStorage;
