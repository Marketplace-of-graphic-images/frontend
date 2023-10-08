/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable ternary/no-unreachable */

import React, {
  useState, useEffect, useRef,
} from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileIcon } from 'ui-lib/Icons';

// styles
import styles from './ButtonWithDropDown.module.scss';
import { ArrowDownIcon, ArrowUpIcon } from '../../Icons';

interface Imenuitem {
  path: string;
  name: string;
}

export interface IButtonWithDropDown {
  menuItem: Imenuitem[];
  isProfile?: boolean;
  // eslint-disable-next-line
  title?: string;
}

const ButtonWithDropDown: React.FC<IButtonWithDropDown> = ({
  title, menuItem, isProfile,
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
  const checkProfile = () => {
    if (!isProfile) {
      if (dropDownState) {
        return <ArrowUpIcon />;
      }
      return <ArrowDownIcon />;
    } return <ProfileIcon className={styles.icon} width='40' height='40' />;
  };
 
  return (
    <div ref={wrapperRef} className={styles.dropdown}>
      <button onClick={toggleDropDown} type='button' className={`${styles.button}  ${isProfile ? styles.not_panding : ''}`}>
        {title && title }
        {checkProfile()}
      </button>

      {dropDownState && (
        <div onMouseLeave={() => { setDropDownState(false); }} className={styles.dropdown_content}>
          <ul>
            {menuItem.map((link) => (
              <li className={`${styles.link} ${isProfile ? styles.link_profile : ''}`} key={link.name}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>         
            ))}
          </ul>
          <div> 
            <hr className={styles.profile_line} /> 
            <button className={styles.link} type='button'> Выйти из аккаунта </button>
          </div>
        </div>
      )}
    </div> 

  );
};
ButtonWithDropDown.defaultProps = {
  isProfile: false, 
};
export default ButtonWithDropDown;
