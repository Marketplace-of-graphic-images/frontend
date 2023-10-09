import { batch } from 'react-redux';
import { authUser } from '../api/api';
import {
  onLogin, closeModal, isLoadingOn, isLoadingOff, clearApiErr,
  setEmailApiErr, setPasswordApiErr, setGeneralApiErr,
} from '../store';
import { AppThunk } from '../types/store.types';
import { TApiErrors } from '../types/types';

type TUserSignIn = {
  id: number;
  username: string;
  profile_photo: string;
  role: string;
};

const loginUserThunk : AppThunk = (data) => async (dispatch) => {
  const authErrors = (errors: TApiErrors) => {
    if ('password' in errors) {
      dispatch(setPasswordApiErr(errors.password[0]));
    } else if ('email' in errors) {
      dispatch(setEmailApiErr(errors.email));
    } else {
      dispatch(setGeneralApiErr('Ошибка авторизации'));
    }
  };

  try {
    dispatch(clearApiErr());
    dispatch(isLoadingOn());

    const res: TUserSignIn = await authUser(data);

    batch(() => {
      dispatch(onLogin());
      dispatch(closeModal());
    });

    localStorage.setItem('userId', res.id.toString());
  } catch (error:any) {
    authErrors(error as TApiErrors);
  } finally {
    dispatch(isLoadingOff());
  }
};
export default loginUserThunk;
