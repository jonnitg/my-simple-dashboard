import * as types from './index';
import { LoginRequest } from '../types/login';

export const loginUserAction = (user: LoginRequest) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};

export const logoutUserAction = () => {
  return {
    type: types.LOGOUT_USER,
  };
};
