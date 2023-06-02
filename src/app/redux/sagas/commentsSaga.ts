import { call, delay, put, select, takeEvery } from 'redux-saga/effects';

import { getPostComments } from '@/app/apis/postsAPI';
import { getCurrentPostId } from '@/app/selectors';
import { TComment } from '@/app/types/app.typings';

import { getCommentsFailure, getCommentsSuccess } from '../slices/commentsSlice';

function* workGetCommentsFetch() {
  try {
    const currentPostId: number = yield select(getCurrentPostId);
    const comments: TComment[] = yield call(() => getPostComments(currentPostId));
    yield delay(500);
    yield put(getCommentsSuccess(comments));
  } catch (e) {
    if (e instanceof Error) {
      yield put(getCommentsFailure(e.message));
      throw new Error(e.message);
    }
  }
}

export function* commentsSaga() {
  yield takeEvery('comments/getCommentsFetch', workGetCommentsFetch);
}
