import { batch } from 'react-redux';
import { registUser } from '../api/api';
import { TApiErrors, TuserDataTemp } from '../types/types';
import {
  isLoadingOn, isLoadingOff, setEmailApiErr, setUsernameApiErr,
  setPasswordApiErr, setGeneralApiErr, clearApiErr, setUserDataTemp,
} from '../store';
import { AppThunk } from '../types/store.types';

const registerUserThunk : AppThunk = (data, setForm: (step: number) => void) => (
  async (dispatch) => {
    const registerErrors = (errors: TApiErrors) => {
      if ('password' in errors) {
        dispatch(setPasswordApiErr(errors.password[0]));
      } else if ('username' in errors) {
        dispatch(setUsernameApiErr(errors.username[0]));
      } else if ('email' in errors) {
        dispatch(setEmailApiErr(errors.email[0]));
      } else {
        dispatch(setGeneralApiErr('Ошибка регистрации'));
      }
    };

    try {
      dispatch(isLoadingOn());
      const res: TuserDataTemp = await registUser(data);
      batch(() => {
        dispatch(setUserDataTemp(res));
        dispatch(clearApiErr());
        setForm(2);
      });
    } catch (error: any) {
      dispatch(clearApiErr());
      registerErrors(error as TApiErrors);
    } finally {
      dispatch(isLoadingOff());
    }
  }
);
export default registerUserThunk;
