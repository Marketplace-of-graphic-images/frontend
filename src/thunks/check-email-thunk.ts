import { batch } from 'react-redux';
import { registСonfirmationUser } from '../api/api';
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
  setUserDataTemp, clearUserDataTemp, 
} from '../store';
import { AppThunk } from '../types/store.types';

const chekEmailThunk : AppThunk = (data) => async (dispatch) => {
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
    dispatch(clearAuthErr());
    dispatch(isLoadingOn());
    const res = await registСonfirmationUser(data);
    batch(() => {
      // eslint-disable-next-line
      console.log(res);
      dispatch(onLogin());
      dispatch(closeModal());
      dispatch(clearUserDataTemp());
    });
  } catch (error:any) {
    // eslint-disable-next-line
  console.log(error)
  } finally {
    dispatch(isLoadingOff());
  }
};
export default chekEmailThunk;
