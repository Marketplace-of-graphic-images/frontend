import React, { FC } from 'react';
import styles from './BecomeAnAuthor.module.scss';

interface IBecomeAnAuthorButton extends React.ComponentPropsWithoutRef<'button'> {
  text: string
  onClick: () => void
}

const BecomeAnAuthorButton: FC<IBecomeAnAuthorButton> = ({
  text, 
  onClick, 
  ...rest 
}) => (
  <button
    type='button'
    className={styles.button}
    onClick={onClick}
    {...rest}>
    <p className={styles.text}>{text}</p>
  </button>
);
export default BecomeAnAuthorButton;
