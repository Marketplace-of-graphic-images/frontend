import { batch } from 'react-redux';
import { registСonfirmationUser } from '../api/api';
import {
  onLogin,
  closeModal, 
  isLoadingOn,
  isLoadingOff,
  clearAuthErr,
  clearUserDataTemp, 
  setConfirmationCodeRegistErr,
  clearConfirmationCodeRegistErr,

} from '../store';
import { AppThunk } from '../types/store.types';

const chekEmailThunk : AppThunk = (data, setCode) => async (dispatch) => {
  const confirmationCodeErrors = (errors) => {
    if ('confirmation_code' in errors) {
      dispatch(setConfirmationCodeRegistErr('Введенный код не совпадает с отправленным!'));
    } else {
      dispatch(setConfirmationCodeRegistErr('Ошибка регистрации'));
    }
  };

  try {
    dispatch(clearAuthErr());
    dispatch(isLoadingOn());
    const res = await registСonfirmationUser(data);
    batch(() => {
      console.log(res);
      dispatch(onLogin());
      dispatch(closeModal());
      // eslint-disable-next-line
      dispatch(clearUserDataTemp());
      dispatch(clearConfirmationCodeRegistErr());
    });
  } catch (error:any) {
    // eslint-disable-next-line
    setCode('')
    confirmationCodeErrors(error);
    console.log(error);
  } finally {
    dispatch(isLoadingOff());
  }
};
export default chekEmailThunk;
