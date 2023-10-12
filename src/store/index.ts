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
  setMainImagesDownloadErr,
  setMainTagsDownloadErr,
  clearMainDownloadErr,
  clearConcreteApiErr,
  setVkApiErr,
  setTelegramApiErr,
  setWebsiteApiErr,
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
  clearConcreteApiErr,
  setVkApiErr,
  setTelegramApiErr,
  setWebsiteApiErr,
};
