import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  // auth
  Welcome: undefined;
  EmailLogin: undefined;

  // add more
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
