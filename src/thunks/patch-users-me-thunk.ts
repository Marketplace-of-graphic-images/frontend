import { pathUsersMe } from '../api/api';
import {
  isLoadingOn, isLoadingOff, setUser, setEmailApiErr, clearApiErr, setUsernameApiErr,
} from '../store';
import { AppThunk } from '../types/store.types';
import { TApiErrors, TUser } from '../types/types';

const patchUsersMeThunk : AppThunk = (userData) => async (dispatch) => {
  const profileErrors = (errors: TApiErrors) => {
    switch (true) {
      case 'email' in errors:
        return dispatch(setEmailApiErr(errors.email));

      case 'username' in errors:
        return dispatch(setUsernameApiErr(errors.username));

      default: return 'Что-то пошло не так';
    }
  };

  try {
    dispatch(isLoadingOn());
    const res: TUser = await pathUsersMe(userData);

    dispatch(setUser(res));
    // return res;
  } catch (error: any) {
    dispatch(clearApiErr());
    profileErrors(error as TApiErrors);
  } finally {
    dispatch(isLoadingOff());
  }
};

export default patchUsersMeThunk;
