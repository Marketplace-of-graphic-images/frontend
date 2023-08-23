import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main/main';
import YandexAuth from '../pages/yandexAuth/yandexAuth';
import Popup from '../components/Template/Popup/Popup';
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import Header from '../components/Header/header';
import { useDispatch, useSelector } from '../services/hooks';
import { closeModal } from '../store';
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage/PasswordRecoveryPage';
import Footer from '../components/Footer/Footer';

const App = () => {
  const dispatch = useDispatch();
  const { modalState } = useSelector((state) => state.system);
  const closeModal1 = () => {
    dispatch(closeModal());
  };
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
      </Routes>

      <Popup isOpen={modalState.auth} onClose={closeModal1}>
        <AuthorizationPage />
      </Popup>
      <Popup isOpen={modalState.register} onClose={closeModal1}>
        <RegistrationPage />
      </Popup>
      <Popup isOpen={modalState.passRecovery} onClose={closeModal1}>
        <PasswordRecoveryPage />
      </Popup>
    </div>
  );
};
export default App;
