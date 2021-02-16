import {
  action,
  createStore,
  createTypedHooks,
  State,
  thunk,
} from 'easy-peasy';

import { IAuth, ILogin, IStoreModel } from '@/app/types';
import { auth } from './models';
import { DemoStoreModel, IUser } from './demo-hooks/users';
import axios from 'axios';

// export const store = createStore<IStoreModel>({
export const store = createStore<DemoStoreModel>({
  users: [],
  addUsers: action((state: State<DemoStoreModel>, payload: IUser[]) => {
    state.users = payload;
  }),
  getUsers: thunk(async (actions) => {
    try {
      const resp = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      // console.log({ resp });
      actions.addUsers(resp.data);
    } catch (error) {
      return [];
    }
  }),
  // auth,
  // login: action((state: State<IStoreModel>, payload: ILogin) => {
  //   state.auth;
  // }),
  // addLogin: thunk((state: { [key: string]: any }, payload: ILogin) => {
  //   return payload;
  // }),
});

const typedHooks = createTypedHooks<DemoStoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
// export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useEasyState = typedHooks.useStoreState;
