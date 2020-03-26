import * as types from '../actions';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginUser {
  type: typeof types.LOGIN_USER;
  user: LoginRequest;
}

export type LoginState = {
  accessToken: string;
  success: boolean;
  error: string;
};
interface LoginUserSuccess {
  type: typeof types.LOGIN_USER_SUCCESS;
  response: LoginState;
}

interface LoginUserError {
  type: typeof types.LOGIN_USER_ERROR;
  response: LoginState;
}

interface LoginUserLogout {
  type: typeof types.LOGOUT_USER;
  response: LoginState;
}

export type LoginUserTypes =
  | LoginUserSuccess
  | LoginUserError
  | LoginUserLogout;
