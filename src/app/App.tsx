import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main/main';

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
    <div>
      Заготовка будущего контейнера для Tooltip.
      Все тултипы в компонентах *телепортировать* сюда, ипользуя реакт функцию createPortal()
    </div>
  </div>
);
export default App;
