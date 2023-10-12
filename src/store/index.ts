import {
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
  openModalNotification,
  openModalShare,
  openModalComplain,
  openAuthorModal,
} from './modalSlice';

import {

  setUserRole,
  setAuthorRole,
  isLoadingOn,
  isLoadingOff,
  onLogin,
  onLogout,
  setImageSearchField,
  clearSearchField,
} from './systemSlice';

import {
  setEmailApiErr,
  setPasswordApiErr,
  setGeneralApiErr,
  setUsernameApiErr,
  setConfirmCodeApiErr,
  clearApiErr,
  setMainImagesDownloadErr,
  setMainTagsDownloadErr,
  clearMainDownloadErr,
  
} from './apiErrorSlice';

import {
  setUser, clearUser, setUserDataTemp, clearUserDataTemp, 
} from './userSlice';

import {
  setImage, clearImage,
} from './imageSlice';

import {
  isMainPageImagesLoadingOn,
  isMainPageImagesLoadingoff,
  onPopularImagesDownload,
  onPopularTagsDownload,
  setPopularPhotos,
  setPopularVectors,
  setPopularGifs,
  setPopularTags,
  clearStoreData,
} from './mainPageImagesSlice';

export {
  setImageSearchField,
  clearSearchField,
  openModalAuth,
  closeModal,
  openModalRegister,
  openModalPassRecovery,
  openModalNotification,
  setUser,
  clearUser,
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
  openModalShare,
  openModalComplain,
  setImage,
  clearImage,
  openAuthorModal,
  setMainImagesDownloadErr,
  setMainTagsDownloadErr,
  clearMainDownloadErr,
  isMainPageImagesLoadingOn,
  isMainPageImagesLoadingoff,
  onPopularImagesDownload,
  onPopularTagsDownload,
  setPopularPhotos,
  setPopularVectors,
  setPopularGifs,
  setPopularTags,
  clearStoreData,
};
