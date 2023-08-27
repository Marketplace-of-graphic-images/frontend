import { createSlice } from '@reduxjs/toolkit';

type TSystemState = {
  isLoggedIn:boolean,
};

const initialState: TSystemState = {
  isLoggedIn: false,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    onLogin: (state: TSystemState) => ({ ...state, isLoggedIn: true }),
    onLogout: (state: TSystemState) => ({ ...state, isLoggedIn: false }),

  },
});

const systemReducer = systemSlice.reducer;
export const {
  onLogin,
  onLogout,
} = systemSlice.actions;
export default systemReducer;
