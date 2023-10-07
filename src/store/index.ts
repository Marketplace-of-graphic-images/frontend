import {
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
  openModalNotification,
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
  setEmailRegistErr,
  setPasswordRegistErr,
  setUsernameRegistErr,
  clearRegistErr,
  setGeneralRegistErr,
  clearConfirmationCodeRegistErr,
  setConfirmationCodeRegistErr,
} from './apiErrorSlice';

import {
  setUser, clearUser, setUserDataTemp, clearUserDataTemp, 
} from './userSlice';

export {
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
  openModalNotification,
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
  setEmailRegistErr,
  setPasswordRegistErr,
  setUsernameRegistErr,
  clearRegistErr,
  setGeneralRegistErr,
  setUserDataTemp,
  clearUserDataTemp,
  clearConfirmationCodeRegistErr,
  setConfirmationCodeRegistErr,
};
