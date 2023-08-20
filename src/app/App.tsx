import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main/main';

const App = () => (
  <div className='App'>

    <Routes>
      <Route
        path='/'
        element={<Main />} />
    </Routes>

    <div className='popups-container'>
      {/* Контейнер для Popup.
      Все попапы в компонентах *телепортировать* сюда, ипользуя реакт функцию createPortal() */}
    </div>

  </div>
);
export default App;
