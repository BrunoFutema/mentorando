import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import video from './video/sagas';

export default function* rootSaga() {
  return yield all([auth, video]);
}
