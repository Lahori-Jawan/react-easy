export interface ILogin {
  id?: string | number;
  username: string;
  email: string;
}

export interface IAuth {
  user: ILogin | null;
}
