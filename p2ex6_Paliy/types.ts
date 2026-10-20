export type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export type RootStackParamList = {
  UserList: undefined;
  UserDetails: { user: User };
};
