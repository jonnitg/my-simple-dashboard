import Cookies from 'js-cookie';
import * as types from '../actions';
import { LoginUserTypes, LoginState } from '../types/login';

const token = Cookies.get('token');

const initState = {
  accessToken: token || '',
  success: !!token,
  error: '',
};

const loginReducer = (
  state: LoginState = initState,
  action: LoginUserTypes
) => {
  const { response, type } = action;
  switch (type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...response, success: true };
    case types.LOGIN_USER_ERROR:
      return { ...state, ...response };
    case types.LOGOUT_USER:
      Cookies.remove('token');
      return { ...initState, success: false, accessToken: '' };
    default:
      return state;
  }
};

export default loginReducer;
