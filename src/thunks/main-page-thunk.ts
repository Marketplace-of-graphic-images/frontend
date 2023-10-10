import { batch } from 'react-redux';
import { getPopularTags, getPopularPics } from '../api/api';
import { TTagsFetchError } from '../types/apiEror';
import { 
  IMAGE_CARDS_DOWNLOAD_FAIL,
  TAGS_DOWNLOAD_FAIL,
} from '../constants/apiError';
import {
  isMainPageImagesLoadingOn,
  isMainPageImagesLoadingoff,
  onPopularImagesDownload,
  onPopularTagsDownload,
  setPopularPhotos,
  setPopularVectors,
  setPopularGifs,
  setPopularTags,
  setMainImagesDownloadErr,
  setMainTagsDownloadErr,
  clearMainDownloadErr,
  clearStoreData,
} from '../store';
import { AppThunk } from '../types/store.types';

const mainPageImagesDownloadThunk : AppThunk = (isLoggedIn : boolean) => async (dispatch) => {
  try {
    dispatch(clearStoreData());
    dispatch(clearMainDownloadErr());
    dispatch(isMainPageImagesLoadingOn());
  
    if (!isLoggedIn) {
      const res = await Promise.all([
        getPopularPics('raster_image'), 
        getPopularPics('gif_image'), 
        getPopularPics('vector_image')]);

      batch(() => {
        // eslint-disable-next-line
        
        if ((res[0].results.length >= 4) 
          && (res[1].results.length >= 4) 
          && (res[2].results.length >= 4)) {
          dispatch(setPopularPhotos(res[0].results.slice(0, 4)));
          dispatch(setPopularGifs(res[1].results.slice(0, 4)));
          dispatch(setPopularVectors(res[2].results.slice(0, 4)));
          dispatch(onPopularImagesDownload());
        }
      });
    } else {
      const res = await Promise.all([
        getPopularPics('raster_image'), 
        getPopularPics('gif_image'), 
        getPopularPics('vector_image'), 
        getPopularTags()]);

      console.log(res);

      batch(() => {
        // eslint-disable-next-line
          if((res[0].results.length >= 4) 
            && (res[1].results.length >= 4) 
            && (res[2].results.length >= 4)) {
          dispatch(setPopularPhotos(res[0].results.slice(0, 4)));
          dispatch(setPopularGifs(res[1].results.slice(0, 4)));
          dispatch(setPopularVectors(res[2].results.slice(0, 4)));
          dispatch(onPopularImagesDownload());
        }
        if (res[3].length >= 5) {
          dispatch(setPopularTags(res[3].slice(0, 5)));
          dispatch(onPopularTagsDownload());
        }
      });
    }
  } catch (error:any) {
    // eslint-disable-next-line

    console.log(error);
    /*    authErrors(error) */
  } finally {
    dispatch(isMainPageImagesLoadingoff());
  }
};

export default mainPageImagesDownloadThunk;
