import React, { FC } from 'react';
import useValidation from '../../../services/useValidation';
import { UniversalButton } from '../../../ui-lib/Button';
import { EmailInput } from '../../../ui-lib/Input';
import { MAILING_EMAIL_ID } from '../../../constants/inputsId';
import styles from './MailingForm.module.scss';

const MailingForm: FC = () => {
  const {
    values,
    handleChange,
    errors,
    errorsText,
    errorsDescription,
    resetForm,
  } = useValidation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <form className={styles.mailingForm} onSubmit={handleSubmit}>
      <h3 className={styles.mailingForm__title}>
        Подписывайтесь на рассылку, чтобы быть в курсе последних новостей и обновлений!
      </h3>
      
      <EmailInput
        id={MAILING_EMAIL_ID}
        name='email'
        value={values.email || ''}
        validError={errors.email}
        errorMessage={errorsText.email}
        errorDescription={errorsDescription.email}
        onChange={handleChange}
        borderColor='white'
        className={styles.mailingForm__input} />

      <UniversalButton
        type='submit'
        disabled={errors.email || !values.email}
        className={styles.mailingForm__button}
        width='302'
        height='47'>
        Подписаться
      </UniversalButton>
    </form>
  );
};

export default MailingForm;
