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
  isLocalLoadingOn,
  isLocalLoadingOff,
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
  setMyWorksList,
  setHistoryList,
  setFavouritesList,
  setMyWorksPage,
  setHistoryPage,
  setFavouritesPage,
  setIsMyWorksNext,
  setHistoryNext,
  setFavouritesNext,
  clearAllCardLists,
} from './profileCardsSlice';

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
  setMyWorksList,
  setHistoryList,
  setFavouritesList,
  setMyWorksPage,
  setHistoryPage,
  setFavouritesPage,
  setIsMyWorksNext,
  setHistoryNext,
  setFavouritesNext,
  clearAllCardLists,
  isLocalLoadingOn,
  isLocalLoadingOff,
};
