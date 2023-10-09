import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TImage } from 'types/types';

const initialState: TImage = {
  image: '',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (
      state: TImage,
      action: PayloadAction<TImage>,
    ) => ({ ...state, ...action.payload }),
    clearImage: (state: TImage) => ({
      ...state, ...initialState,
    }),
  },
});
  
const userReducer = imageSlice.reducer;
export const {
  setImage, clearImage, 
} = imageSlice.actions;
export default userReducer;
