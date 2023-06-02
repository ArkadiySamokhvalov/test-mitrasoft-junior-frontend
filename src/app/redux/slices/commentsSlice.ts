import { createSlice } from '@reduxjs/toolkit';

import { TCommentsState } from '@/app/types/app.typings';

const initialState: TCommentsState = {
  currentPostId: null,
  entities: [],
  loading: 'idle',
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setCurrentPostId: (state, { payload }) => {
      state.currentPostId = payload;
    },
    getCommentsFetch: (state) => {
      state.loading = 'pending';
    },
    getCommentsSuccess: (state, { payload }) => {
      state.loading = 'fullfiled';
      state.entities = payload;
    },
    getCommentsFailure: (state, { payload }) => {
      state.loading = 'failed';
      state.error = payload;
    },
  },
});

export const { getCommentsFetch, getCommentsSuccess, getCommentsFailure, setCurrentPostId } =
  commentsSlice.actions;
export default commentsSlice.reducer;
