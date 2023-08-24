import React, {
  useContext, FC, ReactNode, useEffect, 
} from 'react';
import {
  Route, Navigate, useLocation, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from './hooks';
import { openModalAuth } from '../store';

/* eslint-disable */

  const PrivateRoute = ({ children, path, ...rest }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.system.isLoggedIn); 
  const openAuthModal = () => {
    dispatch(openModalAuth());
  };
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    if (!isLoggedIn) {
      openAuthModal()
    }
  },[])

  if (!isLoggedIn) {
    return <Navigate to={'/'} />;
  }
  return <> { children } </>;
};
export default PrivateRoute;
