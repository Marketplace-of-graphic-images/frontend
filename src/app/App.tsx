import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main/main';

const App = () => (
  <>
    {/* <header className='App-header'>test</header> */}

    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </>
);

export default App;
