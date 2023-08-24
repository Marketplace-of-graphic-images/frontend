import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from '../pages/main/main';
import YandexAuth from '../pages/yandexAuth/yandexAuth';
import Popup from '../components/Template/Popup/Popup';
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'; 
import Header from '../components/Header/header';
import { useDispatch, useSelector } from '../services/hooks';
import { closeModal } from '../store';
import PrivateRoute from '../services/PrivateRoute';
import Test from '../pages/Test/test';

const App = () => {
  const dispatch = useDispatch();
  const { modalState } = useSelector((state) => state.system);
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.system.isLoggedIn); 
  const closeModal1 = () => {
    dispatch(closeModal());
  };
  console.log(location);
  
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='yandexauth'
          element={<YandexAuth />} />
        <Route
          path='/'
          element={<Main />} />
        <Route
          path='/profile'
          element={(
            <PrivateRoute path={location.pathname}>
              <Test />
            </PrivateRoute>
          )} />
        <Route
          path='/p'
          element={<Test />} />
      </Routes> 
      {isLoggedIn && (
      <Routes> 
        <Route
          path='/p'
          element={<Test />} />
      </Routes>
      )}

      <Popup isOpen={modalState.auth} onClose={closeModal1}>
        <AuthorizationPage />
      </Popup>
      <Popup isOpen={modalState.registr} onClose={closeModal1}>
        <RegistrationPage />
      </Popup>
    </div>
  );
};
export default App;
