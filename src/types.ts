type ParamType = null | string | number;
export type ParamArray = ParamType[];
export type QueryWithParams = {
  query: string;
  params: ParamArray;
};

export type BigButtonProps = {
  onPress: () => void;
  title: string;
};
