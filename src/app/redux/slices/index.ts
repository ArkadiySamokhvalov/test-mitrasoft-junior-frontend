import { combineReducers } from 'redux';

import commentsReducer from './commentsSlice';
import postsReducer from './postsSlice';
import userReducer from './userSlice';

const reducers = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
});

export default reducers;
