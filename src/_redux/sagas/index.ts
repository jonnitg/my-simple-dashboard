import { all, fork } from 'redux-saga/effects';
import { watchUserAuthentication } from './watchers';

export default function* root() {
  yield all([fork(watchUserAuthentication)]);
}
