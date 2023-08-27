/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState, useEffect, useRef } from 'react';
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

  function useOutsideComponent(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropDownState(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideComponent(wrapperRef);

  const toggleDropDown = () => {
    if (!dropDownState) {
      setDropDownState(true);
    } else {
      setDropDownState(false);
    }
  };

  return (
    <div ref={wrapperRef} className={styles.dropdown}>
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
