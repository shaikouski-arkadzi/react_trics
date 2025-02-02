import { useState, useEffect, Dispatch, SetStateAction } from "react";

export const useDebounce = (
  initialValue: string,
  callback: (value: string) => void,
  delay: number
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, callback, delay]);

  return [value, setValue];
};
