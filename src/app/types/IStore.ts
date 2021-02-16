import { Action, State, Thunk } from 'easy-peasy';
import { IAuth } from '.';
import { ILogin } from './IAuth';

export interface IStoreModel {
  auth: State<IAuth>;
  login: Action<IStoreModel, ILogin>;
  addLogin: Thunk<IStoreModel, ILogin>;
  // addTodo: Thunk<IStoreModel, ITodo>;
}
