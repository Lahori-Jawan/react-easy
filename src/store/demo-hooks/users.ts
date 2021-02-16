import { Action, Thunk } from 'easy-peasy';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: { [key: string]: any };
  geo: { [key: string]: any };
  phone: string;
  website: string;
  company: { [key: string]: any };
}
// https://jsonplaceholder.typicode.com/users

export interface DemoStoreModel {
  users: IUser[];
  addUsers: Action<DemoStoreModel, IUser[]>;
  getUsers: Thunk<DemoStoreModel>;
}
