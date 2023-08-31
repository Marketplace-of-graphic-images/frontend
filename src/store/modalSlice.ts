import { createSlice } from '@reduxjs/toolkit';

type TSystemState = {
  authModal: boolean,
  registerModal: boolean,
  passRecoveryModal: boolean,
  notificationModal: boolean,
};

const initialState: TSystemState = {
  authModal: false,
  registerModal: false,
  passRecoveryModal: false,
  notificationModal: false,
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

    openModalNotification: (state: TSystemState) => (
      { ...state, notificationModal: true }),

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
  openModalNotification,
} = modalSlice.actions;
export default modalReducer;
