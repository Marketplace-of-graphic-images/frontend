import { batch } from 'react-redux';
import { registUser } from '../api/api';
import { TloginError } from '../types/apiEror';
import { TuserDataTemp } from '../types/types';
import {
  NOT_EMAIL_LOGIN,
  NOT_PASSWORD_LOGIN,
  NOT_EMAIL_AND_PASSOWORD_AUTH, 
} from '../constants/apiError';
import {
  onLogin, closeModal, isLoadingOn, isLoadingOff,
  clearAuthErr, setEmailAuthErr, setPasswordAuthErr,
  setUserDataTemp,
} from '../store';
import { AppThunk } from '../types/store.types';

const registerUserThunk : AppThunk = (data, setForm) => async (dispatch) => {
  const authErrors = (errors:TloginError) => {
    switch (errors.errors[0] || '') {
      case 'User with this email does not exist':
        dispatch(setEmailAuthErr(NOT_EMAIL_LOGIN));
        break;
      case 'Wrong password': 
        dispatch(setPasswordAuthErr(NOT_PASSWORD_LOGIN));
        break;
      default:
        dispatch(setEmailAuthErr(NOT_EMAIL_AND_PASSOWORD_AUTH));
        break;
    }
  };

  try {
    dispatch(isLoadingOn());
    const res:TuserDataTemp = await registUser(data);
    batch(() => {
      // eslint-disable-next-line
      console.log(res);
      dispatch(setUserDataTemp(res));
      // eslint-disable-next-line
      setForm(2);
    });
  } catch (error:any) {
    // eslint-disable-next-line
  console.log(error)
  } finally {
    dispatch(isLoadingOff());
  }
};
export default registerUserThunk;
