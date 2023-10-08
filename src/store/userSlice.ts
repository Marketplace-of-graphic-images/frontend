import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, TuserDataTemp } from '../types/types';

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
    setUserDataTemp: (
      state: TUser,
      action: PayloadAction<TuserDataTemp>,
      // eslint-disable-next-line
      
    ) => ({ ...state, userDataTemp: action.payload }),

    clearUserDataTemp: (state: TUser) => ({
      ...state, userDataTemp: null,
    }),
  },

});

const userReducer = userSlice.reducer;
export const {
  setUser, clearUser, setUserDataTemp, clearUserDataTemp, 
} = userSlice.actions;
export default userReducer;
