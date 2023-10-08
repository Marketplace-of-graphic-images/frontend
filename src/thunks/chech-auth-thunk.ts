import { batch } from 'react-redux';
import { checkUserAuth } from '../api/api';
import {
  onLogin, isLoadingOff,
} from '../store';
import { AppThunk } from '../types/store.types';

const checkAuth : AppThunk = () => async (dispatch) => {
  try {
    const res = await checkUserAuth();

    batch(() => {
      dispatch(onLogin());
    });
  } catch (error: any) {
    localStorage.clear();
  } finally {
    dispatch(isLoadingOff());
  }
};

export default checkAuth;
