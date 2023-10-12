import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TImage1 } from 'types/types';

const initialState: TImage1 = {
  image: '',
  is_favorited: false,
  id: 0,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (
      state: TImage1,
      action: PayloadAction<TImage1>,
    ) => ({ ...state, ...action.payload }),
    clearImage: (state: TImage1) => ({
      ...state, ...initialState,
    }),
  },
});
  
const userReducer = imageSlice.reducer;
export const {
  setImage, clearImage, 
} = imageSlice.actions;
export default userReducer;
