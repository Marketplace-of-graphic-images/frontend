import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TImageShort } from '../types/types';

type TSystemState = {
  myWorksList: TImageShort[];
  historyList: TImageShort[];
  favouritesList: TImageShort[];
  myWorksPage: number;
  historyPage: number;
  favouritesPage: number;
  isMyWorksNext: boolean;
  isHistoryNext: boolean;
  isFavouritesNext: boolean;
};

const initialState: TSystemState = {
  myWorksList: [],
  historyList: [],
  favouritesList: [],
  myWorksPage: 1,
  historyPage: 1,
  favouritesPage: 1,
  isMyWorksNext: true,
  isHistoryNext: true,
  isFavouritesNext: true,
};

const profileCardsSlice = createSlice({
  name: 'profileCards',
  initialState,
  reducers: {
    // list
    setMyWorksList: (
      state: TSystemState,
      action: PayloadAction<TImageShort[]>,
    ) => ({ ...state, myWorksList: [...state.myWorksList, ...action.payload] }),

    setHistoryList: (
      state: TSystemState,
      action: PayloadAction<TImageShort[]>,
    ) => ({ ...state, historyList: [...state.historyList, ...action.payload] }),

    setFavouritesList: (
      state: TSystemState,
      action: PayloadAction<TImageShort[]>,
    ) => ({ ...state, favouritesList: [...state.favouritesList, ...action.payload] }),

    // page number
    setMyWorksPage: (
      state: TSystemState,
      action: PayloadAction<number>,
    ) => ({ ...state, myWorksPage: action.payload }),

    setHistoryPage: (
      state: TSystemState,
      action: PayloadAction<number>,
    ) => ({ ...state, historyPage: action.payload }),

    setFavouritesPage: (
      state: TSystemState,
      action: PayloadAction<number>,
    ) => ({ ...state, favouritesPage: action.payload }),

    // is next page
    setIsMyWorksNext: (
      state: TSystemState,
      action: PayloadAction<boolean>,
    ) => ({ ...state, isMyWorksNext: action.payload }),

    setHistoryNext: (
      state: TSystemState,
      action: PayloadAction<boolean>,
    ) => ({ ...state, isHistoryNext: action.payload }),

    setFavouritesNext: (
      state: TSystemState,
      action: PayloadAction<boolean>,
    ) => ({ ...state, isFavouritesNext: action.payload }),

    clearAllCardLists: (state: TSystemState) => ({
      ...state, ...initialState,
    }),
  },
});

const profileCardsReducer = profileCardsSlice.reducer;
export const {
  setMyWorksList,
  setHistoryList,
  setFavouritesList,
  setMyWorksPage,
  setHistoryPage,
  setFavouritesPage,
  setIsMyWorksNext,
  setHistoryNext,
  setFavouritesNext,
  clearAllCardLists,
} = profileCardsSlice.actions;

export default profileCardsReducer;
