import { createSlice } from '@reduxjs/toolkit';

import { TPostsState } from '@/app/types/app.typings';

const initialState: TPostsState = {
  entities: [],
  loading: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsFetch: (state) => {
      state.loading = 'pending';
      state.error = null;
    },
    getUserPostsFetch: (state) => {
      state.loading = 'pending';
      state.error = null;
    },
    getPostsSuccess: (state, { payload }) => {
      state.loading = 'fullfiled';
      state.entities = payload;
    },
    getPostsFailure: (state, { payload }) => {
      state.loading = 'failed';
      state.error = payload;
    },
  },
});

export const { getPostsFetch, getUserPostsFetch, getPostsSuccess, getPostsFailure } = postsSlice.actions;
export default postsSlice.reducer;
