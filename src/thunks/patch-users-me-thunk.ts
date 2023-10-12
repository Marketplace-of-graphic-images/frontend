import { pathUsersMe } from '../api/api';
import {
  isLoadingOn,
  isLoadingOff,
  setUser,
  setEmailApiErr,
  clearApiErr,
  setUsernameApiErr,
  setVkApiErr,
  setTelegramApiErr,
  setWebsiteApiErr,
} from '../store';
import { AppThunk } from '../types/store.types';
import { TApiErrors, TUser } from '../types/types';

const patchUsersMeThunk : AppThunk = (userData) => async (dispatch) => {
  const profileErrors = (errors: TApiErrors) => {
    if ('email' in errors) {
      dispatch(setEmailApiErr(errors.email));
    }

    if ('username' in errors) {
      dispatch(setUsernameApiErr(errors.username));
    }

    if ('vk' in errors) {
      dispatch(setVkApiErr(errors.vk));
    }

    if ('telegram' in errors) {
      dispatch(setTelegramApiErr(errors.telegram));
    }

    if ('website' in errors) {
      dispatch(setWebsiteApiErr(errors.website));
    }
  };

  try {
    dispatch(isLoadingOn());
    const res: TUser = await pathUsersMe(userData);

    dispatch(setUser(res));
  } catch (error: any) {
    dispatch(clearApiErr());
    profileErrors(error as TApiErrors);
  } finally {
    dispatch(isLoadingOff());
  }
};

export default patchUsersMeThunk;
