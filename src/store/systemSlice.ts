import { createSlice } from '@reduxjs/toolkit';

type Role = 'guest' | 'user' | 'author';

type TSystemState = {
  isLoggedIn: boolean,
  userRole: Role,
};

const initialState: TSystemState = {
  isLoggedIn: false,
  userRole: 'guest' as Role,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    onLogin: (state: TSystemState) => ({ ...state, isLoggedIn: true }),
    onLogout: (state: TSystemState) => ({ ...state, isLoggedIn: false }),
    // временная логика
    setGuestRole: (state: TSystemState) => ({ ...state, userRole: 'guest' as Role }),
    setUserRole: (state: TSystemState) => ({ ...state, userRole: 'user' as Role }),
    setAuthorRole: (state: TSystemState) => ({ ...state, userRole: 'author' as Role }),
  },
});

const systemReducer = systemSlice.reducer;
export const {
  onLogin,
  onLogout,
  setGuestRole,
  setUserRole,
  setAuthorRole,
} = systemSlice.actions;
export default systemReducer;
