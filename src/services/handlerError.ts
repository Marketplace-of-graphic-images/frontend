import { TloginError } from '../types/apiEror';
import { NOT_EMAIL_LOGIN, NOT_PASSWORD_LOGIN } from '../constants/apiError';

const authErrors = (errors:TloginError) => {
  switch (errors.errors[0]) {
    case 'User with this email does not exist':
      return NOT_EMAIL_LOGIN;
    case 'Wrong password': 
      return NOT_PASSWORD_LOGIN;
    default: return 'Неправильный логин или пароль';
  }
};
export default authErrors;
