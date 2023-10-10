import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTag, TImage, TAuthor } from 'types/types';

type TMainPageImagesData = {
  isMainPageImagesLoading: boolean,
  popularImagesLoaded: boolean,
  popularTagsLoaded: boolean,
  popularPhotos: TImage[],
  popularGifs: TImage[],
  popularVectors: TImage[],
  popularTags: TTag[],
};

const initialState: TMainPageImagesData = {
  isMainPageImagesLoading: false,
  popularImagesLoaded: false,
  popularTagsLoaded: false,
  popularPhotos: [],
  popularGifs: [],
  popularVectors: [],
  popularTags: [],
};

const mainPageImagesSlice = createSlice({
  name: 'mainPageImages',
  initialState,
  reducers: {
    isMainPageImagesLoadingOn: (state: TMainPageImagesData) => (
      { ...state, isMainPageImagesLoading: true }),
    isMainPageImagesLoadingoff: (state: TMainPageImagesData) => (
      { ...state, isMainPageImagesLoading: false }),
    onPopularImagesDownload: (state: TMainPageImagesData) => (
      { ...state, popularImagesLoaded: true }),
    onPopularTagsDownload: (state: TMainPageImagesData) => ({ ...state, popularTagsLoaded: true }),
    setPopularPhotos: (
      state: TMainPageImagesData,
      action: PayloadAction<TImage[]>,
    ) => ({ ...state, popularPhotos: [...action.payload] }),
    setPopularGifs: (
      state: TMainPageImagesData,
      action: PayloadAction<TImage[]>,
    ) => ({ ...state, popularGifs: [...action.payload] }),
    setPopularVectors: (
      state: TMainPageImagesData,
      action: PayloadAction<TImage[]>,
    ) => ({ ...state, popularVectors: [...action.payload] }),
    setPopularTags: (
      state: TMainPageImagesData,
      action: PayloadAction<TTag[]>,
    ) => ({ ...state, popularTags: [...action.payload] }),
    clearStoreData: (
      state: TMainPageImagesData,
    ) => ({ ...state, ...initialState }),
  },
});

const mainPageImagesReducer = mainPageImagesSlice.reducer;
export const {
  isMainPageImagesLoadingOn,
  isMainPageImagesLoadingoff,
  onPopularImagesDownload,
  onPopularTagsDownload,
  setPopularPhotos,
  setPopularVectors,
  setPopularGifs,
  setPopularTags,
  clearStoreData,
} = mainPageImagesSlice.actions;
export default mainPageImagesReducer;
