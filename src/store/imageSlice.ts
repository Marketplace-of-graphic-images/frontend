import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TImageFull, TAuthor } from 'types/types';

const initialAuthor : TAuthor = {
  id: -1, 
  username: '', 
  profile_photo: '', 
  role: 'Author',
};

const initialState : TImageFull = {
  id: -1,
  created: '',
  author: initialAuthor,
  name: '',
  image: '',
  is_favorited: false,
  license: 'free',
  price: null,
  tags: [],
  slug: '',
  extension: 'GIF',
  recommended: [],
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (
      state: TImageFull,
      action: PayloadAction<TImageFull>,
    ) => ({ ...state, ...action.payload }),
    toggleLike: (
      state: TImageFull,
    ) => ({ ...state, is_favorited: !state.is_favorited }),
    clearImage: (state: TImageFull) => ({
      ...state, ...initialState,
    }),
  },
});
  
const userReducer = imageSlice.reducer;
export const {
  setImage, clearImage, toggleLike,
} = imageSlice.actions;
export default userReducer;
