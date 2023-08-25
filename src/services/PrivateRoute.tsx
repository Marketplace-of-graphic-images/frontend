import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from './hooks';
import { openModalAuth } from '../store';

/* eslint-disable */
//Через props patch отправляется моршрут куда переходить при отклонении
  const PrivateRoute = ({ children, path = '/', ...rest }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.system.isLoggedIn); 
  const openAuthModal = () => {
    dispatch(openModalAuth());
  };
  useEffect(() => {
    if (!isLoggedIn) {
      openAuthModal()
    }
  },[])

  if (!isLoggedIn) {
    return <Navigate to={path} />;
  }
  return <> { children } </>;
};
export default PrivateRoute;
