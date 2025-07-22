/* eslint-disable @typescript-eslint/no-explicit-any */
export type SearchParams = any;
export type Params = any;

export interface PageProps {
  searchParams: SearchParams;
  params: Params;
}


export type QueryParamsType = Record<string, string>