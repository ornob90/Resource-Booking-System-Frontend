/* eslint-disable @typescript-eslint/no-explicit-any */

export const structureQuery = (
  queryParams: Record<string, string>,
  queryKey: string,
  queryVal: string
): string => {
  if (!queryKey) return "";

  const entries = Object.entries(queryParams || {});

  const mergedParams = new URLSearchParams();

  for (const [key, value] of entries) {
    mergedParams.append(key, key === queryKey ? queryVal : value);
  }

  // If the key doesn't already exist, add it
  if (!queryParams?.hasOwnProperty(queryKey)) {
    mergedParams.append(queryKey, queryVal);
  }

  const queryString = mergedParams.toString();
  return queryString ? `?${queryString}` : "";
};
