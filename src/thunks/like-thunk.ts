import { TImageFull } from 'types/types';
import { getImageData, putLike, removeLike } from '../api/api';
import {
  isLoadingOn,
  isLoadingOff,
  toggleLike,
} from '../store';
import { AppThunk } from '../types/store.types';

const imageLikeThunk : AppThunk = (id : number, isLiked : boolean) => async (dispatch) => {
  try {
    if (isLiked) {
      await removeLike(id);
    } else {
      await putLike(id);
    }
    /*    dispatch(toggleLike()); */
  } catch (error:any) {
    console.log(error);
  }
};

export default imageLikeThunk;
