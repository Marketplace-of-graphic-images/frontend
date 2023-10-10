import { batch } from 'react-redux';
import { registerConfirmUser } from '../api/api';
import {
  onLogin,
  closeModal, 
  isLoadingOn,
  isLoadingOff,
  clearApiErr,
  clearUserDataTemp, 
  setConfirmCodeApiErr,

} from '../store';
import { AppThunk } from '../types/store.types';
import { TApiErrors } from '../types/types';

const checkEmailThunk : AppThunk = (data, setCode: (code: string) => void) => async (dispatch) => {
  const confirmationCodeErrors = (errors) => {
    if ('confirmation_code' in errors) {
      dispatch(setConfirmCodeApiErr('Введенный код не совпадает с отправленным!'));
    } else {
      dispatch(setConfirmCodeApiErr('Ошибка регистрации'));
    }
  };

  try {
    dispatch(clearApiErr());
    dispatch(isLoadingOn());
    const res = await registerConfirmUser(data);

    batch(() => {
      dispatch(onLogin());
      dispatch(closeModal());
      dispatch(clearUserDataTemp());
      dispatch(clearApiErr());
    });
  } catch (error:any) {
    setCode('');
    confirmationCodeErrors(error as TApiErrors);
  } finally {
    dispatch(isLoadingOff());
  }
};
export default checkEmailThunk;
