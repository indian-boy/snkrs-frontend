import { useEffect } from 'react';

export default function useDebouncedFunction(handler, watchedValue, delay) {
  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      handler();
    }, delay);
    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [handler, watchedValue, delay]);
}
