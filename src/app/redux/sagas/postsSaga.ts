import { call, delay, put, select, takeEvery } from 'redux-saga/effects';

import { getAllPosts } from '@/app/apis/postsAPI';
import { getUserPosts } from '@/app/apis/userAPI';
import { getCurrentUserId } from '@/app/selectors';
import { TPost } from '@/app/types/app.typings';

import { getPostsFailure, getPostsSuccess } from '../slices/postsSlice';

function* workGetPostsFetch() {
  try {
    const posts: TPost[] = yield call(() => getAllPosts());
    yield delay(500);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    if (e instanceof Error) {
      yield put(getPostsFailure(e.message));
      throw new Error(e.message);
    }
  }
}

function* workGetUserPostsFetch() {
  try {
    const currentUserId: number = yield select(getCurrentUserId);
    const posts: TPost[] = yield call(() => getUserPosts(currentUserId));
    yield delay(500);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    if (e instanceof Error) {
      yield put(getPostsFailure(e.message));
      throw new Error(e.message);
    }
  }
}

export function* postsSaga() {
  yield takeEvery('posts/getPostsFetch', workGetPostsFetch);
  yield takeEvery('posts/getUserPostsFetch', workGetUserPostsFetch);
}
