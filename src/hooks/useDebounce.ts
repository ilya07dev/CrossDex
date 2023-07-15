import { useCallback, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const timer = useRef<NodeJS.Timeout>();

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
  
  return debouncedCallback as T;
}
