import React, { useState, useEffect } from 'react';
import './CodeNumbers.scss';

const CodeNumbers = (props) => {
  const [numberOne, setNubberOne] = useState('');
  const [numberTwo, setNubberTwo] = useState('');
  const [numberThree, setNubberThree] = useState('');
  const [numberFour, setNubberFour] = useState('');
  const [numberFive, setNubberFive] = useState('');
  const [numberSix, setNubberSix] = useState('');
  const [errorInTheCode, setErrorInTheCode] = useState(false);

  function combineNumbers(nameOfTheCurrentInput) {
    const verificationСode = [numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix].join('');
    const verificationСodeNumber = Number(verificationСode);
    const nameOfTheNextInput = Number(nameOfTheCurrentInput) + 1;
    const nextInput = document.querySelector(`input[name="${nameOfTheNextInput}"]`);
    console.log(nameOfTheCurrentInput, nameOfTheNextInput, nextInput);
  }
  useEffect(() => {
    // console.log('yes');
  }, [numberOne, numberTwo, numberThree, numberFour, numberFive]);
  function addErrorClassName() {
    if (errorInTheCode === true) {
      return 'input-code input-code_error';
    }
    return 'input-code';
  }
  return (
    <>
      <div className='codeNumbers'>
        <input type='string' required maxLength='1' className={addErrorClassName()} name='1' onKeyUp={(event) => combineNumbers(event.target.name)} onChange={(event) => setNubberOne(event.target.value)} />
        <input type='string' required maxLength='1' className={addErrorClassName()} name='2' onKeyUp={(event) => combineNumbers(event.target.name)} onChange={(event) => setNubberTwo(event.target.value)} />
        <input type='string' required maxLength='1' className={addErrorClassName()} name='3' onKeyUp={(event) => combineNumbers(event.target.name)} onChange={(event) => setNubberThree(event.target.value)} />
        <input type='string' required maxLength='1' className={addErrorClassName()} name='4' onKeyUp={(event) => combineNumbers(event.target.name)} onChange={(event) => setNubberFour(event.target.value)} />
        <input type='string' required maxLength='1' className={addErrorClassName()} name='5' onKeyUp={(event) => combineNumbers(event.target.name)} onChange={(event) => setNubberFive(event.target.value)} />
        <input type='string' required maxLength='1' className={addErrorClassName()} name='6' onKeyUp={(event) => combineNumbers(event.target.name)} onChange={(event) => setNubberSix(event.target.value)} />
      </div>
      <p className='codeNumbers__error'>Ошибка</p>
    </>

  );
};

export default CodeNumbers;
