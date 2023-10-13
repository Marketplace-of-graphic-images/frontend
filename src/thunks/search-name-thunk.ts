import { batch } from 'react-redux';
import { getSearchName, getSearchTag } from '../api/api';
import {
  isLoadingOn, isLoadingOff, setUser, closeModal, setSerchImages,
} from '../store';
import { TImage1, TImageFull } from '../types/types';
import { AppThunk } from '../types/store.types';

type TserchResult = {
  count: number;
  next: null | string;
  previous: null | number;
  results: TImageFull[]

}; 

const searchNameThunk : AppThunk = (name:string, isTags = false) => async (dispatch) => {
  try {
    dispatch(isLoadingOn());
    let res:TserchResult; 
    if (isTags) {
      res = await getSearchTag(name);
    } else {
      res = await getSearchName(name);
    }
    dispatch(setSerchImages(res.results));
    // return res;
  } catch (error: any) {
    console.log(error);
  } finally {
    dispatch(isLoadingOff());
  }
};

export default searchNameThunk;
