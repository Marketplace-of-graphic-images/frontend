import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, TuserDataTemp } from '../types/types';

type TUserState = {
  id: number | null,
  username: string | null,
  email: string | null,
  bio?: string | null,
  avatar?: string,
  role: string,
  links: string[],
  userDataTemp?: TuserDataTemp | null
};

const initialState: TUserState = {
  id: null,
  username: 'testUser',
  email: null,
  bio: null,
  role: 'author', 
  avatar: '', 
  links: [],
  userDataTemp: null,
  
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
    setUserDataTemp: (
      state: TUserState,
      action: PayloadAction<TuserDataTemp>,
      // eslint-disable-next-line
      
    ) => ({ ...state, userDataTemp: action.payload }),

    clearUserDataTemp: (state: TUserState) => ({
      ...state, userDataTemp: null,
    }),
  },

});

const userReducer = userSlice.reducer;
export const {
  setUser, clearUser, setUserDataTemp, clearUserDataTemp, 
} = userSlice.actions;
export default userReducer;
