import { createSlice } from '@reduxjs/toolkit';

import { TUserState } from '@/app/types/app.typings';

const initialState: TUserState = {
  currentUserId: null,
  user: {},
  loading: 'idle',
  error: null,
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUserId: (state, { payload }) => {
      state.currentUserId = payload;
    },
    getUserFetch: (state) => {
      state.loading = 'pending';
      state.error = null;
    },
    getUserSuccess: (state, { payload }) => {
      state.loading = 'fullfiled';
      state.user = payload;
    },
    getUserFailure: (state, { payload }) => {
      state.loading = 'failed';
      state.error = payload;
    },
  },
});

export const {
  setCurrentUserId,
  getUserFetch,
  getUserSuccess,
  getUserFailure,
} = usersSlice.actions;
export default usersSlice.reducer;
