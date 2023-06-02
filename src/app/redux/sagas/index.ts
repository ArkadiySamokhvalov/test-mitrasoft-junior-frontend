import { all } from 'redux-saga/effects';

import { commentsSaga } from './commentsSaga';
import { postsSaga } from './postsSaga';
import { userSaga } from './userSaga';

const sagas = function* sagas() {
  yield all([postsSaga(), commentsSaga(), userSaga()]);
};

export default sagas;
