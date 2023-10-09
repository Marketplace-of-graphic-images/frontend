import { pathUsersMe } from '../api/api';
import { isLoadingOn, isLoadingOff, setUser } from '../store';
import { AppThunk } from '../types/store.types';
import { TUser } from '../types/types';

// eslint-disable-next-line consistent-return
const patchUsersMeThunk : AppThunk = (userData) => async (dispatch) => {
  try {
    dispatch(isLoadingOn());
    const res: TUser = await pathUsersMe(userData);

    dispatch(setUser(res));
    return res;
  } catch (error: any) {
    // ошибки аналогично авторизации
    console.log(error);
  } finally {
    dispatch(isLoadingOff());
  }
};

export default patchUsersMeThunk;
