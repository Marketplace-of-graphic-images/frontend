import { batch } from 'react-redux';
import { registUser } from '../api/api';
import { TuserDataTemp } from '../types/types';
import {
  isLoadingOn, isLoadingOff,
  setEmailRegistErr,
  setPasswordRegistErr,
  setUsernameRegistErr,
  clearRegistErr,
  setGeneralRegistErr,
  setUserDataTemp,
} from '../store';
import { AppThunk } from '../types/store.types';
/* eslint-disable @typescript-eslint/no-unsafe-member-access,
 @typescript-eslint/no-unsafe-argument */
const registerUserThunk : AppThunk = (data, setForm) => async (dispatch) => {
  const registErrors = (errors) => {
    if ('password' in errors) {
      dispatch(setPasswordRegistErr(errors.password[0]));
    } else if ('username' in errors) {
      dispatch(setUsernameRegistErr(errors.username[0]));
    } else if ('email' in errors) {
      dispatch(setEmailRegistErr(errors.email[0]));
    } else {
      dispatch(setGeneralRegistErr('Ошибка регистрации'));
    }
  };

  try {
    dispatch(isLoadingOn());
    const res:TuserDataTemp = await registUser(data);
    batch(() => {
      // eslint-disable-next-line
      dispatch(setUserDataTemp(res));
      dispatch(clearRegistErr());
      // eslint-disable-next-line
      setForm(2);
    });
  } catch (error:any) {
    // eslint-disable-next-line
    dispatch(clearRegistErr());
    registErrors(error);
  } finally {
    dispatch(isLoadingOff());
  }
};
export default registerUserThunk;
