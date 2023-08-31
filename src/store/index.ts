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
} from './systemSlice';

import { setUser, clearUser } from './userSlice';

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
};
