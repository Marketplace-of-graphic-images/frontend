import { createSlice } from '@reduxjs/toolkit';

type TSystemState = {
  authModal: boolean,
  registerModal: boolean,

  passRecoveryModal: boolean,
};

const initialState: TSystemState = {
  authModal: false,
  registerModal: false,
  passRecoveryModal: false,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModalAuth: (state: TSystemState) => (
      {
        ...state, authModal: true, registerModal: false, passRecovery: false, 
      }),
    openModalRegister: (state: TSystemState) => (
      { ...state, authModal: false, registerModal: true }),
    openModalPassRecovery: (state: TSystemState) => (
      { ...state, authModal: false, passRecoveryModal: true }),
    closeModal: (state: TSystemState) => ({
      ...state,
      ...initialState,
    }),

  },
});

const modalReducer = modalSlice.reducer;
export const {
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
} = modalSlice.actions;
export default modalReducer;
