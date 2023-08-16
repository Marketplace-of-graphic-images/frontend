import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main/main';
import './App.scss';

const hpp = () => (
  <div className='App'>
    <header className='App-header'>
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' test1'}
        and save to reload. Roboto SemiBold Raleway
        Bold
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'>
        Learn React
      </a>
    </header>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </div>
);

export default App;
