export const DB_NAME = 'deltap';
export type ParamType = null | string | number;
export type ParamArray = ParamType[];
export interface QueryWithParams {
  query: string;
  params: ParamArray;
}
