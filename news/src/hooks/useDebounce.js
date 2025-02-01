import { useState, useEffect } from "react";

export const useDebounce = (initialValue, callback, delay) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, callback, delay]);

  return [value, setValue];
};
