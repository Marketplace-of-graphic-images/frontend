import { batch } from 'react-redux';
import { TImageFull } from 'types/types';
import { getImageData } from '../api/api';
import {
  clearImage,
  setImage,
  isLoadingOn,
  isLoadingOff,
} from '../store';
import { AppThunk } from '../types/store.types';

const imageDataDownloadThunk : AppThunk = (id : number) => async (dispatch) => {
  try {
    dispatch(isLoadingOn());
    dispatch(clearImage());
    const res : TImageFull = await getImageData(id);
    dispatch(setImage(res));
  } catch (error:any) {
    dispatch(clearImage());
    console.log(error);
  } finally {
    dispatch(isLoadingOff());
  }
};

export default imageDataDownloadThunk;
