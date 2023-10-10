import {
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
  openModalNotification,
  openAuthorModal,
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
  setEmailApiErr,
  setPasswordApiErr,
  setGeneralApiErr,
  setUsernameApiErr,
  setConfirmCodeApiErr,
  clearApiErr,
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
  setEmailApiErr,
  setPasswordApiErr,
  setGeneralApiErr,
  setUsernameApiErr,
  setConfirmCodeApiErr,
  clearApiErr,
  setUserDataTemp,
  clearUserDataTemp,
<<<<<<< HEAD
  clearConfirmationCodeRegistErr,
  setConfirmationCodeRegistErr,
  openAuthorModal,
=======
>>>>>>> origin/develop
};
