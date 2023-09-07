import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { getUser } from 'api/getUser';
import systemReducer from './systemSlice';
import userReducer from './userSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    system: systemReducer,
    user: userReducer,
    modals: modalReducer,
    [getUser.reducerPath]: getUser.reducer,
  },
  middleware: 
  (getDefaultMiddleware) => getDefaultMiddleware().concat(getUser.middleware, thunk),

  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
