import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TErrorApiState = {
  emailApiErr: string;
  passwordApiErr: string;
  usernameApiErr: string;
  generalApiErr: string;
  confirmCodeApiErr: string;
};

const initialState: TErrorApiState = {
  emailApiErr: '',
  passwordApiErr: '',
  usernameApiErr: '',
  generalApiErr: '',
  confirmCodeApiErr: '',
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
    ) => ({ ...state, generalApiErr: action.payload }),
    
    setUsernameApiErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, usernameApiErr: action.payload }),

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
} = modalSlice.actions;

export default apiErrorReducer;
