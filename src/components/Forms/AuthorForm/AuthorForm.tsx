import React, { FC, SyntheticEvent } from 'react';
import styles from './AuthorForm.module.scss';
import Checkbox from '../../../ui-lib/Checkbox/Checkbox';
import { UniversalButton } from '../../../ui-lib/Button';
import LinkWordButton from '../../../ui-lib/Button/LinkWordButton/LinkWordButton';
import useValidation from '../../../services/useValidation';
import { useDispatch } from '../../../services/hooks';

const AuthorForm:FC = () => {
  const {
    checkboxValues,
    handleChange,
  } = useValidation();
  const dispatch = useDispatch();
  const authorRequest = (e:SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className={styles.authorForm}>

      <h1 className={styles.title}>Вы хотите стать автором?</h1>
      <div className={styles.checkBox}>
        <Checkbox
          name='authorAgreement'
          checked={checkboxValues.authorAgreement || false}
          onChange={handleChange}
          required />

        <div>
          <LinkWordButton
            title='Я ознакомлен с законом об'
            buttonName='Авторском праве и Смежных правах'
            className={styles.linkWordButton} />
        </div>
      </div>

      <UniversalButton type='button' disabled={!checkboxValues.authorAgreement} onClick={authorRequest}>
        Стать автором
      </UniversalButton>
    </div>
  );
};

export default AuthorForm;
