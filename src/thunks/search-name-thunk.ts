import { batch } from 'react-redux';
import { getSearchName } from '../api/api';
import {
  isLoadingOn, isLoadingOff, setUser, closeModal,
} from '../store';
import { AppThunk } from '../types/store.types';

const searchNameThunk : AppThunk = (name:string) => async (dispatch) => {
  try {
    dispatch(isLoadingOn());
    const res = await getSearchName(name);

    console.log(res);
    // return res;
  } catch (error: any) {
    console.log(error);
  } finally {
    dispatch(isLoadingOff());
  }
};

export default searchNameThunk;
