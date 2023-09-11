import React, { useEffect, useState } from 'react';
import styles from './ProfileForm.module.scss';
import { EmailInput, UniversalInput } from '../../../ui-lib/Input';
import {
  PROFILE_EMAIL_ID,
  PROFILE_LOGIN_ID,
  PROFILE_NAME_ID,
  PROFILE_SURNAME_ID,
  PROFILE_WEBSITE1_ID,
  PROFILE_WEBSITE2_ID,
  PROFILE_WEBSITE3_ID,
} from '../../../constants/inputsId';
import useValidation from '../../../services/useValidation';
import DateInput from '../../../ui-lib/Input/DateInput/DateInput';
import { LinkWordButton, UniversalButton } from '../../../ui-lib/Button';
import { PATTERN_EMAIL, PATTERN_NAME, PATTERN_USERNAME } from '../../../constants/constants';
import ProfileTitle from '../../Profile/components/ProfileTitle/ProfileTitle';
import SolidLine from '../../../ui-lib/Line/SolidLine/SolidLine';

const ProfileForm = () => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useValidation();
  
  const [numberOfWebsites, setNumberOfWebsites] = useState(1);
  const [date, setDate] = useState<Date | undefined>();

  useEffect(() => {
    // имитирует юзера с бэкенда
    const tempUserData = {
      username: 'Username',
      name: '',
      surname: '',
      email: 'user@mail.ru',
      sites: [],
    };

    const {
      username, name, surname, email, sites,
    } = tempUserData;

    // ключ должен совпадать с name у инпутов
    const initialValues: Record<string, string> = {
      username,
      name,
      surname,
      email,
    };

    if (sites?.length) {
      sites.forEach((site, i) => initialValues[`web${i + 1}`] = site);

      setNumberOfWebsites(sites.length);
    }

    resetForm(initialValues);
  }, [resetForm]);

  // реализовать функцию проверки новых значений в форме
  // если их нет return false
  const isFormChanged = () => true;

  const isButtonDisable = isFormChanged() && isValid;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const {
      username, name, surname, email, web1, web2, web3, 
    } = values;

    const submitData = { 
      username,
      name,
      surname,
      email,
      birthday: date || '', // согласовать формат даты
      sites: [] as Array<string>,
    };

    if (web1) submitData.sites.push(web1);
    if (web2) submitData.sites.push(web2);
    if (web3) submitData.sites.push(web3);

    console.log(submitData);
  };

  return (
    <section className={styles.profileForm}>
      <div className={styles.profileForm__title}>
        <ProfileTitle text='Персональные данные' />
      </div>

      <SolidLine />

      <form className={styles.profileForm__form} onSubmit={handleSubmit}>
        <div className={styles.profileForm__inputsContainer}>

          <p className={styles.profileForm__label}>Имя пользователя</p>

          <UniversalInput
            id={PROFILE_LOGIN_ID}
            name='username'
            value={values.username || ''}
            onChange={handleChange}
            validError={errors.username}
            pattern={PATTERN_USERNAME}
            style={{ width: '220px', height: '38px' }}
            required />

          <p className={styles.profileForm__label}>Имя</p>

          <UniversalInput
            id={PROFILE_NAME_ID}
            name='name'
            value={values.name || ''}
            onChange={handleChange}
            validError={errors.name}
            pattern={PATTERN_NAME}
            style={{ width: '220px', height: '38px' }} />

          <p className={styles.profileForm__label}>Фамилия</p>

          <UniversalInput
            id={PROFILE_SURNAME_ID}
            name='surname'
            value={values.surname || ''}
            onChange={handleChange}
            validError={errors.surname}
            pattern={PATTERN_NAME}
            style={{ width: '220px', height: '38px' }} />

          <p className={styles.profileForm__label}>Дата рождения</p>

          <DateInput value={date} onChange={(val: Date | undefined) => setDate(val)} />

          <p className={styles.profileForm__label}>E-mail</p>

          <EmailInput
            id={PROFILE_EMAIL_ID}
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            validError={errors.email}
            pattern={PATTERN_EMAIL}
            label=''
            style={{ width: '220px', height: '38px' }}
            required />

          {numberOfWebsites > 0 && (
            <>
              <p className={styles.profileForm__label}>Веб-сайт</p>

              <UniversalInput
                id={PROFILE_WEBSITE1_ID}
                name='web1'
                value={values.web1 || ''}
                onChange={handleChange}
                validError={errors.web1}
                style={{ width: '220px', height: '38px' }} />
            </>
          )}

          {numberOfWebsites > 1 && (
            <>
              <p className={styles.profileForm__label}>Веб-сайт</p>

              <UniversalInput
                id={PROFILE_WEBSITE2_ID}
                name='web2'
                value={values.web2 || ''}
                onChange={handleChange}
                validError={errors.web2}
                style={{ width: '220px', height: '38px' }} />
            </>
          )}

          {numberOfWebsites > 2 && (
            <>
              <p className={styles.profileForm__label}>Веб-сайт</p>

              <UniversalInput
                id={PROFILE_WEBSITE3_ID}
                name='web3'
                value={values.web3 || ''}
                onChange={handleChange}
                validError={errors.web3}
                style={{ width: '220px', height: '38px' }} />
            </>
          )}

        </div>

        {numberOfWebsites < 3 && (
          <LinkWordButton
            buttonName='Добавить веб-сайт'
            style={{ marginTop: '16px' }}
            onClick={() => setNumberOfWebsites(numberOfWebsites + 1)} />
        )}

        <UniversalButton
          width={447}
          buttonStyle='borderGreen'
          className={styles.profileForm__submitBtn}
          disabled={!isButtonDisable}>
          Сохранить изменения
        </UniversalButton>

        <UniversalButton
          type='button'
          width={447}>
          Изменить пароль
        </UniversalButton>

      </form>

    </section>
  );
};

export default ProfileForm;
