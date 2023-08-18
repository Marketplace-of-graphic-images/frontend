import React, { useState, useEffect } from 'react';
import './Checkbox.scss';

const Checkbox = (props) => {
  const [checked, setChecked] = useState();
  const isActiveCheckbox = `${checked === true ? 'true' : 'false'}`;
  useEffect(() => {
    setChecked(isActiveCheckbox);
  }, [isActiveCheckbox]);
  function toggleCheckbox() {
    const newValue = !checked;
    setChecked(newValue);
  }
  return (
    <button type='button' className={`checkbox ${checked ? 'checkbox_active' : ''}`} onClick={toggleCheckbox} />
  );
};

export default Checkbox;
