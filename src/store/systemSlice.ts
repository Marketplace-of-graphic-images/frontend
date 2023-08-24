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
  modalState: TModalState
};

const initialState: TSystemState = {
  modalState: testModal,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
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
