type ParamType = null | string | number;
export type ParamArray = ParamType[];
export type QueryWithParams = {
  query: string;
  params: ParamArray;
};

export type LoaderProps = {
  isLoading: Boolean;
  children: JSX.Element | JSX.Element[];
};

export type BigButtonProps = {
  onPress: () => void;
  title: string;
};

export type UseFetch = {
  data: object;
  loading: Boolean;
  error: object | null;
};

export type DBFunction = (...args: any[]) => any;
