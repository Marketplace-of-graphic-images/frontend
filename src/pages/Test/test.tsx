import React from 'react';
import { PasswordInput } from '../../ui-lib/Input';
import { useDispatch, useSelector } from '../../services/hooks';

const Test = () => { 
  const dispatch = useDispatch();

  return (
    <main>
      <p>Test</p>

      {/* <PasswordInput apiError='test' /> */}
      {/* <RegistrationPage /> */}
    </main>
  );
};
export default Test;
