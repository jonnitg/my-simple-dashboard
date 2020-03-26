import { combineReducers } from 'redux';
import { LoginState } from '_redux/types/login';
import login from './loginReducer';

export interface State {
  login: LoginState;
}

const rootReducer = combineReducers<State>({ login });

export default rootReducer;
