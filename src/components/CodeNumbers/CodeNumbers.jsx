import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import './CodeNumbers.scss';

const CodeNumbers = (props) => {
  const [numberOne, setNubberOne] = useState('');
  const [numberTwo, setNubberTwo] = useState('');
  const [numberThree, setNubberThree] = useState('');
  const [numberFour, setNubberFour] = useState('');
  const [numberFive, setNubberFive] = useState('');
  const [numberSix, setNubberSix] = useState('');
  useEffect(() => {
  }, []);
  // const valueCheckbox = createSelector(
  //   (state) => state.Checkbox.
  // );
  return (
    <div className='codeNumbers'>
      <input type='number' required maxLength='1' minLength='1' className='input-code' onChange={(event) => setNubberOne(event.target.value)} />
      <input type='number' required maxLength='1' minLength='1' className='input-code' onChange={(event) => setNubberTwo(event.target.value)} />
      <input type='number' required maxLength='1' minLength='1' className='input-code' onChange={(event) => setNubberThree(event.target.value)} />
      <input type='number' required maxLength='1' minLength='1' className='input-code' onChange={(event) => setNubberFour(event.target.value)} />
      <input type='number' required maxLength='1' minLength='1' className='input-code' onChange={(event) => setNubberFive(event.target.value)} />
      <input type='number' required maxLength='1' minLength='1' className='input-code' onChange={(event) => setNubberSix(event.target.value)} />
    </div>
  );
};

export default CodeNumbers;
