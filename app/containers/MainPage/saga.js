import { takeLatest, put } from 'redux-saga/effects';
import 'firebase/auth';
import { CHANGE_LOCATION, FROM_LOCATION } from './constants';
import { updateFromLocation, updateToLocation } from './actions';

function* changeLocation(action) {
  if (action.fromOrTo === FROM_LOCATION) {
    yield put(updateFromLocation(action.location));
  } else {
    yield put(updateToLocation(action.location));
  }
  // TODO: Firebaseに保存する処理を書く
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
