import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import { 
  Main, Profile, YandexAuth, NotFound, 
} from '../pages';
import Popup from '../components/Template/Popup/Popup';
import Header from '../components/Header/Header';
import { useDispatch, useSelector } from '../services/hooks';
import { closeModal } from '../store';
import {
  PasswordRecoveryUnionForm,
  RegistrationForm,
  AuthorizationForm,
} from '../components/Forms';
import PrivateRoute from '../services/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const { authModal, registerModal, passRecoveryModal } = useSelector((state) => state.modals);
  const closeModalState = () => {
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
        <Route
          path='/profile'
          element={<Profile />} />
        <Route
          path='/test'
          element={(
            <PrivateRoute path='/'>
              <Profile />
            </PrivateRoute>
          )} />
        <Route 
          path='*'
          element={<NotFound />} />
      </Routes>
      <Footer />

      <Popup isOpen={authModal} onClose={closeModalState}>
        <AuthorizationForm />
      </Popup>

      <Popup isOpen={registerModal} onClose={closeModalState}>
        <RegistrationForm />
      </Popup>

      <Popup isOpen={passRecoveryModal} onClose={closeModalState}>
        <PasswordRecoveryUnionForm />
      </Popup>
    </div>
  );
};
export default App;
