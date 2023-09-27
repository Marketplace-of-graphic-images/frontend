import { createSlice } from '@reduxjs/toolkit';

type TSystemState = {
  authModal: boolean,
  registerModal: boolean,
  passRecoveryModal: boolean,
  notificationModal: boolean,
  confirmChangeUserDataModal: boolean,
};

const initialState: TSystemState = {
  authModal: false,
  registerModal: false,
  passRecoveryModal: false,
  notificationModal: false,
  confirmChangeUserDataModal: false,
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

    openModalConfirmChangeUserData: (state: TSystemState) => (
      { ...state, confirmChangeUserDataModal: true }),

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
  openModalConfirmChangeUserData,
} = modalSlice.actions;
export default modalReducer;
