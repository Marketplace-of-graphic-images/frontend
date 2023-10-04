import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { getUser } from 'api/getUsers';
import { getPopular } from 'api/getPopular';
import systemReducer from './systemSlice';
import userReducer from './userSlice';
import modalReducer from './modalSlice';
import apiErrorReducer from './apiErrorSlice';

const store = configureStore({
  reducer: {
    system: systemReducer,
    user: userReducer,
    modals: modalReducer,
    apiError: apiErrorReducer,
    [getUser.reducerPath]: getUser.reducer,
    [getPopular.reducerPath]: getPopular.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getPopular.middleware, thunk),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
