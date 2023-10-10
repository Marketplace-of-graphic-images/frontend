import { createSlice } from '@reduxjs/toolkit';
import { Role } from 'types/types';

type TSystemState = {
  isLoggedIn: boolean,
  userRole: Role,
  isLoading: boolean
};

const initialState: TSystemState = {
  isLoggedIn: false,
  userRole: 'user' as Role,
  isLoading: true,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    isLoadingOn: (state:TSystemState) => ({ ...state, isLoading: true }),
    isLoadingOff: (state:TSystemState) => ({ ...state, isLoading: false }),
    onLogin: (state: TSystemState) => ({ ...state, isLoggedIn: true }),
    onLogout: (state: TSystemState) => ({ ...state, isLoggedIn: false }),
    // временная логика
    setUserRole: (state: TSystemState) => ({ ...state, userRole: 'User' as Role }),
    setAuthorRole: (state: TSystemState) => ({ ...state, userRole: 'Author' as Role }),
  },
});

const systemReducer = systemSlice.reducer;
export const {
  onLogin,
  isLoadingOn,
  isLoadingOff,
  onLogout,
  setUserRole,
  setAuthorRole,
} = systemSlice.actions;
export default systemReducer;
