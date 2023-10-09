import {
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
  openModalNotification,
  openModalShare,
  openModalComplain,
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
  setGeneralAuthErr,
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

import {
  setImage, clearImage,
} from './imageSlice';

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
  setGeneralAuthErr,
  setEmailRegistErr,
  setPasswordRegistErr,
  setUsernameRegistErr,
  clearRegistErr,
  setGeneralRegistErr,
  setUserDataTemp,
  clearUserDataTemp,
  clearConfirmationCodeRegistErr,
  setConfirmationCodeRegistErr,
  openModalShare,
  openModalComplain,
  setImage,
  clearImage,
};
