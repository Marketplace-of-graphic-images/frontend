import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TErrorApiState = {
  emailAuthErr: string;
  passwordAuthErr: string;
  generalAuthErr:string;
};

const initialState: TErrorApiState = {
  emailAuthErr: '',
  passwordAuthErr: '',
  generalAuthErr: '',
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

  },
});

const apiErrorReducer = modalSlice.reducer;
export const {
  setEmailAuthErr,
  setPasswordAuthErr,
  clearAuthErr,
} = modalSlice.actions;
export default apiErrorReducer;
