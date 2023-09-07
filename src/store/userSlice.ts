import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';

const initialState: TUser = {
  id: null,
  username: null,
  email: null,
  bio: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state: TUser,
      action: PayloadAction<TUser>,
    ) => ({ ...state, ...action.payload }),
    clearUser: (state: TUser) => ({
      ...state, ...initialState,
    }),
  },
});

const userReducer = userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
export default userReducer;
