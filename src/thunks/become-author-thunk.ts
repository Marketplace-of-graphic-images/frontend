import { batch } from 'react-redux';
import { pathUsersMe } from '../api/api';
import {
  isLoadingOn, isLoadingOff, setUser, closeModal,
} from '../store';
import { AppThunk } from '../types/store.types';
import { TUser } from '../types/types';

const becomeAthorThunk : AppThunk = (userData) => async (dispatch) => {
  try {
    dispatch(isLoadingOn());
    const res: TUser = await pathUsersMe(userData);

    batch(() => {
      dispatch(setUser(res));
      dispatch(closeModal());
    });
    // return res;
  } catch (error: any) {
    console.log(error);
  } finally {
    dispatch(isLoadingOff());
  }
};

export default becomeAthorThunk;
