import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main/main';
import YandexAuth from '../pages/yandexAuth/yandexAuth';
import YandexLogin from '../services/auth/yandex/YandexLogin';

const clientID = '049e6b67f251461b8eec67c35cf998bc'; // Нужно записать в process.env

const App = () => (
  <div className='App'>
    <YandexLogin clientID={clientID}>
      <button type='button'>Залогиниться</button>
    </YandexLogin>
    <Routes>
      <Route
        path='/'
        element={<Main />} />
      <Route
        path='yandexauth'
        element={<YandexAuth />} />
    </Routes>

    <div className='popups-container'>

      Контейнер для Popup.
      Все попапы в компонентах *телепортировать* сюда, ипользуя реакт функцию createPortal()
    </div>

  </div>
);
export default App;
