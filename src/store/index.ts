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
} from './systemSlice';

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
};
