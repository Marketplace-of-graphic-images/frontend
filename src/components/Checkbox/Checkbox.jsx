import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import './Checkbox.scss';

const Checkbox = (props) => {
  const [checked, setChecked] = useState();
  const isActiveCheckbox = `${checked === true ? 'true' : 'false'}`;
  useEffect(() => {
    setChecked(isActiveCheckbox);
  }, [isActiveCheckbox]);
  // const valueCheckbox = createSelector(
  //   (state) => state.Checkbox.
  // );
  function toggleCheckbox() {
    const newValue = !checked;
    setChecked(newValue);
  }
  return (
    <button type='button' className={`checkbox ${checked ? 'checkbox_active' : ''}`} onClick={toggleCheckbox} />
  );
};

export default Checkbox;
