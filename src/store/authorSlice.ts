import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role, TAuthor1 } from 'types/types';

const initialState: TAuthor1 = {
  id: 0,
  username: '',
  profile_photo: '',
  role: 'User' as Role,
  num_of_author_images: 0,
  is_subscribed: false,
};

const authorSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setAuthor: (
      state: TAuthor1,
      action: PayloadAction<TAuthor1>,
    ) => ({ ...state, ...action.payload }),
    clearAuthor: (state: TAuthor1) => ({
      ...state, ...initialState,
    }),
  },
});
  
const userReducer = authorSlice.reducer;
export const {
  setAuthor, clearAuthor,
} = authorSlice.actions;
export default userReducer;
