import { batch } from 'react-redux';
import { getSearchName } from '../api/api';
import {
  isLoadingOn, isLoadingOff, setUser, closeModal, setSerchImages,
} from '../store';
import { TImage1 } from '../types/types';
import { AppThunk } from '../types/store.types';

type TserchResult = {
  count: number;
  next: null | string;
  previous: null | number;
  results: TImage1[]

}; 

const searchNameThunk : AppThunk = (name:string) => async (dispatch) => {
  try {
    dispatch(isLoadingOn());
    const res:TserchResult = await getSearchName(name);
    dispatch(setSerchImages(res.results));
    console.log(res);
    // return res;
  } catch (error: any) {
    console.log(error);
  } finally {
    dispatch(isLoadingOff());
  }
};

export default searchNameThunk;
