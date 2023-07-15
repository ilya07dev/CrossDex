import { useCallback, useState } from "react";

interface useInputReturn {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useInput(initialValue: string | undefined): useInputReturn {
  const [value, setValue] = useState(initialValue || "");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange };
}
