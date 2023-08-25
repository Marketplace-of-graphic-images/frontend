import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import styles from './ButtonWithDropDown.module.scss';

interface Imenuitem {
  path: string;
  name: string;
}

interface IButtonWithDropDown {
  title: string;
  menuItem: Imenuitem[];
}

const ButtonWithDropDown: React.FC<IButtonWithDropDown> = ({
  title, menuItem,
}) => (
  <div className={styles.dropdown}>
    <button type='button' className={styles.dropbtn}>
      {title} 
    </button>
    <ul className={styles.dropdown_content}>

      {menuItem.map((link) => (
        <li className={styles.link} key={link.name}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </li>
         
      ))}
    </ul>
  </div> 

);

export default ButtonWithDropDown;
