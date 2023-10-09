import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TErrorApiState = {
  emailAuthErr: string;
  passwordAuthErr: string;
  generalAuthErr:string;
  usernameRegistErr:string;
  emailRegistErr: string;
  passwordRegistErr: string;
  generalRegistErr: string;
  confirmationCodeRegistErr:string;
  
};

const initialState: TErrorApiState = {
  emailAuthErr: '',
  passwordAuthErr: '',
  generalAuthErr: '',
  emailRegistErr: '',
  passwordRegistErr: '',
  generalRegistErr: '',
  usernameRegistErr: '',
  confirmationCodeRegistErr: '',
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
    
    clearAuthErr: (state: TErrorApiState) => ({
      ...state, passwordAuthErr: '', emailAuthErr: '', generalAuthErr: '',
    }),

    setEmailRegistErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, emailRegistErr: action.payload }),

    setPasswordRegistErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, passwordRegistErr: action.payload }),

    setGeneralRegistErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, generalRegistErr: action.payload }),

    setUsernameRegistErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, usernameRegistErr: action.payload }),
    
    clearRegistErr: (state: TErrorApiState) => ({
      ...state,
      emailRegistErr: '',
      passwordRegistErr: '', 
      generalRegistErr: '', 
      usernameRegistErr: '',
      confirmationCodeRegistErr: '',
    }),
    setConfirmationCodeRegistErr: (
      state: TErrorApiState,
      action: PayloadAction<string>,
    ) => ({ ...state, confirmationCodeRegistErr: action.payload }),

    clearConfirmationCodeRegistErr: (state: TErrorApiState) => ({
      ...state,
      confirmationCodeRegistErr: '',
    }),
  },
});

const apiErrorReducer = modalSlice.reducer;
export const {
  setEmailAuthErr,
  setPasswordAuthErr,
  clearAuthErr,
  setGeneralAuthErr,
  setEmailRegistErr,
  setPasswordRegistErr,
  setUsernameRegistErr,
  clearRegistErr,
  setGeneralRegistErr,
  clearConfirmationCodeRegistErr, 
  setConfirmationCodeRegistErr,
} = modalSlice.actions;
export default apiErrorReducer;
