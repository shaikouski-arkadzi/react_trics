import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";

export const useDebounce = <T extends string>(
  initialValue: T,
  action: (value: T) => any,
  delay: number
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initialValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(action(value));
    }, delay);

    return () => clearTimeout(handler);
  }, [value, action, delay, dispatch]);

  return [value, setValue];
};
