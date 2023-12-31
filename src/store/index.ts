import {
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
} from './modalSlice';

import {

  setGuestRole,
  setUserRole,
  setAuthorRole,
  isLoadingOn,
  isLoadingOff,
  onLogin,
  onLogout,
} from './systemSlice';

import {
  setEmailAuthErr,
  setPasswordAuthErr,
  clearAuthErr,
} from './apiErrorSlice';

import { setUser, clearUser } from './userSlice';

export {
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
  setUser,
  clearUser,
  setGuestRole,
  setUserRole,
  setAuthorRole,
  isLoadingOn,
  isLoadingOff,
  onLogin,
  onLogout,
  setEmailAuthErr,
  setPasswordAuthErr,
  clearAuthErr,
};
