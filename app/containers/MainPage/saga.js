import { takeLatest } from 'redux-saga/effects';
import 'firebase/auth';
import { CHANGE_LOCATION } from './constants';

function* changeLocation() {
  console.log('!');
}

// Root saga
export default function* rootSaga() {
  yield takeLatest(CHANGE_LOCATION, changeLocation);
  // if necessary, start multiple sagas at once with `all`
  // yield [

  //   // takeLatest(LOAD_REPOS, getRepos),
  //   // takeLatest(LOAD_USERS, getUsers),
  // ];
}
