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
  setAuthor, clearAuthor,
} from './authorSlice';

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
  setAuthor,
  clearAuthor,
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
