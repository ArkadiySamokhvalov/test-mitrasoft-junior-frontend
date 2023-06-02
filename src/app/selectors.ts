import { RootState } from './store';

export const getPostsState = (state: RootState) => state.posts;
export const getCommentsState = (state: RootState) => state.comments;
export const getUserState = (state: RootState) => state.user;
export const getCurrentPostId = (state: RootState) => state.comments.currentPostId;
export const getCurrentUserId = (state: RootState) => state.user.currentUserId;
