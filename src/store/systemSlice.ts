import { createSlice } from '@reduxjs/toolkit';

type Role = 'guest' | 'user' | 'author';

type TSystemState = {
  isLoggedIn: boolean,
  userRole: Role,
  isLoading: boolean,
  isLocalLoading,
};

const initialState: TSystemState = {
  isLoggedIn: false,
  userRole: 'user' as Role,
  isLoading: true,
  isLocalLoading: false,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    isLoadingOn: (state:TSystemState) => ({ ...state, isLoading: true }),
    isLoadingOff: (state:TSystemState) => ({ ...state, isLoading: false }),
    onLogin: (state: TSystemState) => ({ ...state, isLoggedIn: true }),
    onLogout: (state: TSystemState) => ({ ...state, isLoggedIn: false }),
    isLocalLoadingOn: (state:TSystemState) => ({ ...state, isLocalLoading: true }),
    isLocalLoadingOff: (state:TSystemState) => ({ ...state, isLocalLoading: false }),
    // временная логика
    setGuestRole: (state: TSystemState) => ({ ...state, userRole: 'guest' as Role }),
    setUserRole: (state: TSystemState) => ({ ...state, userRole: 'user' as Role }),
    setAuthorRole: (state: TSystemState) => ({ ...state, userRole: 'author' as Role }),
  },
});

const systemReducer = systemSlice.reducer;
export const {
  onLogin,
  isLoadingOn,
  isLoadingOff,
  onLogout,
  setGuestRole,
  setUserRole,
  setAuthorRole,
  isLocalLoadingOn,
  isLocalLoadingOff,
} = systemSlice.actions;
export default systemReducer;
