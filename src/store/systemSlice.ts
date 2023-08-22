import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const testModal = { auth: false, registr: false, confirmEmail: false };

interface TmodalState {
  auth: boolean,
  registr: boolean,
  confirmEmail: boolean 

}
type TSystemState = {
  modalState:TmodalState
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
      { ...state.modalState, auth: true, registr: false }, 
    }),
    openModalRegister: (state: TSystemState) => ({
      ...state,
      modalState: 
      { ...state.modalState, auth: false, registr: true }, 
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
} = systemSlice.actions;
export default systemReducer;
