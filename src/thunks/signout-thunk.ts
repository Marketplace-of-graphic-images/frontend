import { batch } from 'react-redux';
import { signoutUser } from '../api/api';
import {
  onLogout, isLoadingOff,
} from '../store';
import { AppThunk } from '../types/store.types';

const signoutThunk : AppThunk = () => async (dispatch) => {
  try {
    const res = await signoutUser();
    batch(() => {
      dispatch(onLogout());
    });
    localStorage.clear();
  } catch (error: any) {
    console.log(error);
  } finally {
    dispatch(isLoadingOff());
  }
};

export default signoutThunk;
