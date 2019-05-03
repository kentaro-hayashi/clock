import { takeLatest, call, put } from 'redux-saga/effects';
import firebase from 'utils/firebase';
import { LOGOUT } from './constants';
import { completeLogout } from './actions';

function* logout() {
  try {
    yield call(signOut);
  } catch (error) {
    console.warn('[logout] failed!');
    console.warn(error);
  }
  yield put(completeLogout());
}

function signOut() {
  return firebase.auth().signOut();
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(LOGOUT, logout);
}
