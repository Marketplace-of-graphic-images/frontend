import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TErrorApiState = {
  emailAuthErr: string;
  passwordAuthErr: string;
  generalAuthErr: string;
  mainImagesDownloadErr: string;
  mainTagsDownloadErr: string;
};

const initialState: TErrorApiState = {
  emailAuthErr: '',
  passwordAuthErr: '',
  generalAuthErr: '',
  mainImagesDownloadErr: '',
  mainTagsDownloadErr: '',
};

const modalSlice = createSlice({
  name: 'errorApi',
  initialState,
  reducers: {
    setEmailAuthErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, emailAuthErr: action.payload }),

    setPasswordAuthErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, passwordAuthErr: action.payload }),

    setGeneralAuthErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, generalAuthErr: action.payload }),

    setMainImagesDownloadErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, mainImagesDownloadErr: action.payload }),

    setMainTagsDownloadErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, mainTagsDownloadErr: action.payload }),
    
    clearAuthErr: (state: TErrorApiState) => ({
      ...state, passwordAuthErr: '', emailAuthErr: '', generalAuthErr: '',
    }),

    clearMainDownloadErr: (state: TErrorApiState) => ({
      ...state, mainImagesDownloadErr: '', mainTagsDownloadErr: '',
    }),

  },
});

const apiErrorReducer = modalSlice.reducer;
export const {
  setEmailAuthErr,
  setPasswordAuthErr,
  clearAuthErr,
  setMainImagesDownloadErr,
  setMainTagsDownloadErr,
  clearMainDownloadErr,
} = modalSlice.actions;
export default apiErrorReducer;
