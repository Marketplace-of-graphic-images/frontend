import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';

const initialState: TUser = {
  id: NaN,
  username: '',
  email: '',
  first_name: '',
  last_name: '',
  vk: '',
  instagram: '',
  website: '',
  profile_photo: null,
  birthday: null,
  role: 'User',
  count_my_images: 0,
  my_subscribers: 0,
  my_subscriptions: 0,
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
