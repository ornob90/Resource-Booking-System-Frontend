"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useSearchParamsObject = (): Record<string, string> => {
  const searchParams = useSearchParams();

  const queryObject = useMemo(() => {
    const obj: Record<string, string> = {};
    for (const [key, value] of searchParams.entries()) {
      obj[key] = value;
    }
    return obj;
  }, [searchParams]);

  return queryObject;
};
