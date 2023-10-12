import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TErrorApiState = {
  emailApiErr: string;
  passwordApiErr: string;
  usernameApiErr: string;
  generalApiErr: string;
  confirmCodeApiErr: string;
  mainImagesDownloadErr: string;
  mainTagsDownloadErr: string;
};

const initialState: TErrorApiState = {
  emailApiErr: '',
  passwordApiErr: '',
  usernameApiErr: '',
  generalApiErr: '',
  confirmCodeApiErr: '',
  mainImagesDownloadErr: '',
  mainTagsDownloadErr: '',
};

const modalSlice = createSlice({
  name: 'errorApi',
  initialState,
  reducers: {
    setEmailApiErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, emailApiErr: action.payload }),

    setPasswordApiErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, passwordApiErr: action.payload }),

    setGeneralApiErr: (
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
    
    setUsernameApiErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, usernameApiErr: action.payload }),

    clearMainDownloadErr: (state: TErrorApiState) => ({
      ...state, mainImagesDownloadErr: '', mainTagsDownloadErr: '',
    }),

    setConfirmCodeApiErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, confirmCodeApiErr: action.payload }),

    clearApiErr: (state: TErrorApiState) => ({
      ...state,
      passwordApiErr: '',
      emailApiErr: '',
      generalApiErr: '',
      usernameApiErr: '',
      confirmCodeApiErr: '',
    }),
  },
});

const apiErrorReducer = modalSlice.reducer;

export const {
  setEmailApiErr,
  setPasswordApiErr,
  setGeneralApiErr,
  setUsernameApiErr,
  setConfirmCodeApiErr,
  clearApiErr,
  setMainImagesDownloadErr,
  setMainTagsDownloadErr,
  clearMainDownloadErr,
} = modalSlice.actions;

export default apiErrorReducer;
