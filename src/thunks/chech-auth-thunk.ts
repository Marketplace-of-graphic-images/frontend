import { batch } from 'react-redux';
import { checkUserAuth } from '../api/api';
import {
  onLogin, isLoadingOff, setUser,
} from '../store';
import { AppThunk } from '../types/store.types';
import { TUser } from '../types/types';

const checkAuth : AppThunk = () => async (dispatch) => {
  try {
    const res: TUser = await checkUserAuth();

    batch(() => {
      dispatch(onLogin());
      dispatch(setUser(res));
    });
  } catch (error: any) {
    localStorage.clear();
  } finally {
    dispatch(isLoadingOff());
  }
};

export default checkAuth;
