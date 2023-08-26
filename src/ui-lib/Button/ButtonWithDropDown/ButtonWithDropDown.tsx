/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// styles
import styles from './ButtonWithDropDown.module.scss';
import { ArrowDownIcon, ArrowUpIcon } from '../../Icons';

interface Imenuitem {
  path: string;
  name: string;
}

export interface IButtonWithDropDown {
  title: string;
  menuItem: Imenuitem[];
}

const ButtonWithDropDown: React.FC<IButtonWithDropDown> = ({
  title, menuItem,
}) => {
  const [dropDownState, setDropDownState] = useState(false);

  // window.addEventListener('click', () =>
  //  { if (dropDownState === true) setDropDownState(false); });

  const toggleDropDown = () => {
    if (!dropDownState) {
      setDropDownState(true);
    } else {
      setDropDownState(false);
    }
  };

  return (

    <div className={styles.dropdown}>
      <button onClick={toggleDropDown} type='button' className={styles.button}>
        {title} 

        {dropDownState ? (<ArrowUpIcon />
        ) : (
          <ArrowDownIcon />
        )}
      </button>

      {dropDownState && (
      <ul onMouseLeave={() => { setDropDownState(false); }} className={styles.dropdown_content}>
        {menuItem.map((link) => (
          <li className={styles.link} key={link.name}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>         
        ))}
      </ul>
      )}
    </div> 

  );
};

export default ButtonWithDropDown;
