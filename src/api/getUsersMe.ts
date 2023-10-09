import { getUsersMe } from './api';
import { TUser } from '../types/types';
import { isLoadingOff, isLoadingOn, setUser } from '../store';

/* eslint-disable */
const getUsersMeData = (dispatch) => {
  dispatch(isLoadingOn);

  getUsersMe()
    .then((resUser: TUser) => dispatch(setUser(resUser)))
    .catch((err) => console.log(err))
    .finally(() => dispatch(isLoadingOff));
};

export default getUsersMeData;
