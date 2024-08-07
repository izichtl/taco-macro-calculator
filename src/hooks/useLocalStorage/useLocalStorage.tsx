import { useCallback, useState } from "react";

export const useLocalStorage = (_key: string, _initialValue: any) => {
  const key = window.location.hostname + _key

  const initialValue = () => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : _initialValue
    } catch (error) {
      return _initialValue
    }
  }

  const [storedValue, setStoredValue] = useState(initialValue())

  const setValue = useCallback(
    (value: any) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (error) {
        console.error('error', error);
      }
    },
    [key, storedValue]
  );

  const removeValue = useCallback(
    () => {
      try {
        localStorage.removeItem(key)
      } catch (error) {
        console.error('error', error);
      }
    },
    [key]
  );

  return [storedValue, setValue, removeValue]
}