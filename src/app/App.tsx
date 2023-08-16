import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main/main';

<<<<<<< HEAD
const App = () => (
  <>
    {/* <header className='App-header'>test</header> */}

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
>>>>>>> 24b065977d7717c0df325a5a4865320058b1ca2c
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </>
);

export default App;
