import { put, call } from 'redux-saga/effects';
import { LoginUser } from '_redux/types/login';
import { loginUserService } from '../services/authenticationService';

import * as types from '../actions';

export function* loginSaga(payload: LoginUser) {
  try {
    const response = yield call(loginUserService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}
