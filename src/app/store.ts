import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './redux/sagas';
import rootReducer from './redux/slices';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      storage,
      blacklist: ['posts', 'comments'],
    },
    rootReducer
  ),
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
