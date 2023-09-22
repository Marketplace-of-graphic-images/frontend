import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';

type TUserState = {
  id: number | null,
  username: string | null,
  email: string | null,
  bio?: string | null,
  avatar?: string,
  role: string,
  links: string[]
};

const initialState: TUserState = {
  id: null,
  username: 'testUser',
  email: null,
  bio: null,
  role: 'author', 
  avatar: '', 
  links: [], 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state: TUserState,
      action: PayloadAction<TUser>,
    ) => ({ ...state, ...action.payload }),
    clearUser: (state: TUserState) => ({
      ...state, ...initialState,
    }),
  },
});

const userReducer = userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
export default userReducer;
