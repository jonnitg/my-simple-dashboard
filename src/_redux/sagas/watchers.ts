import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authenticationSaga';

import * as types from '../actions';

export function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
