import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import SharePopup from 'components/Template/SharePopup/SharePopup';
import ComplainPopup from 'components/Template/ComplainPopup/ComplainPopup';
import { 
  Main, Profile, YandexAuth, NotFound, ImageCardPage,
} from '../pages';
import Popup from '../components/Template/Popup/Popup';
import Header from '../components/Header/Header';
import { useDispatch, useSelector } from '../services/hooks';
import Loader from '../components/Loader/Loader';

import {
  closeModal, isLoadingOff,
} from '../store';
import {
  PasswordRecoveryUnionForm,
  RegistrationForm,
  AuthorizationForm,
  AuthorForm,
} from '../components/Forms';
import PrivateRoute from '../services/PrivateRoute';
import ProfileEdit from '../pages/profile/ProfileEdit/ProfileEdit';
import checkAuth from '../thunks/chech-auth-thunk';

const App = () => {
  const dispatch = useDispatch();
  const {
    authModal, registerModal, passRecoveryModal, authorModal, shareModal, complainModal,
  } = useSelector((state) => state.modals);
  const { isLoading } = useSelector((state) => state.system);

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      dispatch(checkAuth());
    } else {
      dispatch(isLoadingOff());
    }
  }, [dispatch]);
  
  const closeModalState = () => {
    dispatch(closeModal());
  };

  return (
    <div className='App'>
      {isLoading
        ? <Loader />
        : (
          <>
            <Header />
            <Routes>
              <Route
                path='yandexauth'
                element={<YandexAuth />} />

              <Route
                path='/'
                element={<Main />} />

              <Route
                path='/card/:id'
                element={<ImageCardPage />} />
              <Route
                path='/profile'
                element={(
                  <PrivateRoute path='/'>
                    <Profile />
                  </PrivateRoute>
                )} />
              <Route
                path='*'
                element={<NotFound />} />
              <Route
                path='/profile/edit'
                element={<ProfileEdit />} />
            </Routes>
            <Footer />
          </>
        )}
      <Popup isOpen={shareModal} onClose={closeModalState} width='625px' height='285px'>
        <SharePopup />
      </Popup>

      <Popup isOpen={complainModal} onClose={closeModalState} width='555px'>
        <ComplainPopup />
      </Popup>

      <Popup isOpen={authorModal} onClose={closeModalState}>
        <AuthorForm />
      </Popup>

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
