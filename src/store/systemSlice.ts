import { createSlice } from '@reduxjs/toolkit';

const testModal = {
  auth: false,
  register: false,
  confirmEmail: false,
  passRecovery: false,
};

interface TModalState {
  auth: boolean,
  register: boolean,
  confirmEmail: boolean,
  passRecovery: boolean,
}
type TSystemState = {
  modalState:TModalState,
  isLoggedIn:boolean,
};

const initialState: TSystemState = {
  modalState: testModal,
  isLoggedIn: false,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    onLogin: (state: TSystemState) => ({ ...state, isLoggedIn: true }),
    onLogout: (state: TSystemState) => ({ ...state, isLoggedIn: false }),
    openModalAuth: (state: TSystemState) => ({
      ...state,
      modalState: 
      {
        ...state.modalState, auth: true, register: false, passRecovery: false, 
      },
    }),
    openModalRegister: (state: TSystemState) => ({
      ...state,
      modalState: 
      { ...state.modalState, auth: false, register: true },
    }),
    openModalPassRecovery: (state: TSystemState) => ({
      ...state,
      modalState:
        { ...state.modalState, auth: false, passRecovery: true },
    }),
    closeModal: (state: TSystemState) => ({
      ...state,
      modalState: testModal, 
    }),

  },
});

const systemReducer = systemSlice.reducer;
export const {
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
} = systemSlice.actions;
export default systemReducer;
