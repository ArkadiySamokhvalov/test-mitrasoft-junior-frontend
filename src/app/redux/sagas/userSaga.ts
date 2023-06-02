import { call, delay, put, select, takeEvery } from 'redux-saga/effects';

import { getUserById } from '@/app/apis/userAPI';
import { getCurrentUserId } from '@/app/selectors';
import { TUser } from '@/app/types/app.typings';

import { getUserFailure, getUserSuccess } from '../slices/userSlice';

function* workGetUserFetch() {
  try {
    const currentUserId: number = yield select(getCurrentUserId);
    console.log('file: userSaga.ts:12 ~ function*workGetUserFetch ~ currentUserId:', currentUserId);
    const user: TUser = yield call(() => getUserById(currentUserId));
    yield delay(500);
    yield put(getUserSuccess(user));
  } catch (e) {
    if (e instanceof Error) {
      yield put(getUserFailure(e.message));
      throw new Error(e.message);
    }
  }
}

export function* userSaga() {
  yield takeEvery('user/getUserFetch', workGetUserFetch);
}
