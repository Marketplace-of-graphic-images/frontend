import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TErrorApiState = {
  emailApiErr: string;
  passwordApiErr: string;
  usernameApiErr: string;
  vkApiErr: string;
  telegramApiErr: string;
  websiteApiErr: string;
  generalApiErr: string;
  confirmCodeApiErr: string;
  mainImagesDownloadErr: string;
  mainTagsDownloadErr: string;
};

export type TErrorsNames = 'emailApiErr' | 'passwordApiErr' | 'usernameApiErr'
| 'vkApiErr' | 'telegramApiErr' | 'websiteApiErr' | 'generalApiErr' | 'confirmCodeApiErr' 
| 'mainImagesDownloadErr' | 'mainTagsDownloadErr';

const initialState: TErrorApiState = {
  emailApiErr: '',
  passwordApiErr: '',
  usernameApiErr: '',
  vkApiErr: '',
  telegramApiErr: '',
  websiteApiErr: '',
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

    setVkApiErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, vkApiErr: action.payload }),

    setTelegramApiErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, telegramApiErr: action.payload }),

    setWebsiteApiErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, websiteApiErr: action.payload }),

    clearMainDownloadErr: (state: TErrorApiState) => ({
      ...state, mainImagesDownloadErr: '', mainTagsDownloadErr: '',
    }),

    setConfirmCodeApiErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, confirmCodeApiErr: action.payload }),

    clearApiErr: (state: TErrorApiState) => ({
      ...state, ...initialState,
    }),

    clearConcreteApiErr: (
      state: TErrorApiState,
      action: PayloadAction<TErrorsNames>,
    ) => ({
      ...state, [action.payload]: false,
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
  clearConcreteApiErr,
  setVkApiErr,
  setTelegramApiErr,
  setWebsiteApiErr,
} = modalSlice.actions;

export default apiErrorReducer;
