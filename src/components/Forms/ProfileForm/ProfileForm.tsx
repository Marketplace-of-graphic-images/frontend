import React, {
  useEffect, useMemo, useReducer, useState, 
} from 'react';
import styles from './ProfileForm.module.scss';
import { EmailInput, UniversalInput } from '../../../ui-lib/Input';
import {
  PROFILE_EMAIL_ID, PROFILE_TELEGRAM_ID, PROFILE_NAME_ID, PROFILE_SURNAME_ID,
  PROFILE_USERNAME_ID, PROFILE_VK_ID, PROFILE_WEBSITE_ID,
} from '../../../constants/inputsId';
import useValidation from '../../../services/useValidation';
import DateInput from '../../../ui-lib/Input/DateInput/DateInput';
import { UniversalButton } from '../../../ui-lib/Button';
import { PATTERN_NAME, PATTERN_USERNAME } from '../../../constants/constants';
import FileLoadInput from '../../../ui-lib/Input/FileLoadInput/FileLoadInput';
import { CameraIconGreen } from '../../../ui-lib/Icons';
import ConfirmPopup from '../../Template/ConfirmPopup/ConfirmPopup';
import { useDispatch, useSelector } from '../../../services/hooks';
import { closeModal, openModalConfirmChangeUserData } from '../../../store/modalSlice';

const ProfileForm = () => {
  const {
    values,
    handleChange,
    errors,
    errorsText,
    errorsDescription,
    isValid,
    resetForm,
  } = useValidation();

  const [date, setDate] = useState<Date | undefined>();
  const [avatar, setAvatar] = useState<File | undefined>();

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  };

  const dispatch = useDispatch();
  const { confirmChangeUserDataModal } = useSelector((state) => state.modals);

  const closePopups = () => {
    dispatch(closeModal());
  };

  // имитирует юзера с бекенда
  const tempUserData = useMemo(() => ({
    username: 'Username',
    name: '',
    surname: '',
    email: 'user@mail.ru',
    vk: '',
    instagram: '',
    website: '',
  }), []);

  useEffect(() => {
    // ключ должен совпадать с name у инпутов
    resetForm(tempUserData);
  }, [resetForm, tempUserData]);

  const isFormChanged = () => (
    !Object.entries(values).every(([key, value]) => tempUserData[key] === value)
  );

  const isButtonDisable = isFormChanged() && isValid;

  // submit
  const handleSubmit = () => {
    const {
      username, name, surname, email, vk, instagram, website,
    } = values;

    const submitData = {
      username,
      name,
      surname,
      email,
      birthday: date || '', // согласовать формат даты
      vk,
      instagram,
      website,
      avatar,
    };

    console.log(submitData);

    closePopups();
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(openModalConfirmChangeUserData());
  };

  const onCancelClick = () => {
    // ключ должен совпадать с name у инпутов
    resetForm(tempUserData);
    closePopups();
  };

  return (
    <section className={styles.profileForm}>

      <form className={styles.profileForm__form} onSubmit={onSubmit}>
        <div className={styles.profileForm__formContainer}>

          <div className={styles.profileForm__avatarContainer}>
            <img src='#' alt='' className={styles.profileForm__avatarImage} />
            <FileLoadInput
              onChange={handleAvatarChange}
              icon={<CameraIconGreen width={22} height={22} />}
              className={styles.profileForm__avatarLoadInput} />
          </div>

          <div className={styles.profileForm__inputsContainer}>
            <UniversalInput
              id={PROFILE_USERNAME_ID}
              name='username'
              value={values.username || ''}
              onChange={handleChange}
              pattern={PATTERN_USERNAME}
              validError={errors.username}
              errorMessage={errorsText.username}
              errorDescription={errorsDescription.username}
              label='Имя пользователя'
              staticLabel
              borderColor='grey'
              borderStyle='full'
              width={320}
              height={46}
              required />

            <EmailInput
              id={PROFILE_EMAIL_ID}
              name='email'
              value={values.email || ''}
              onChange={handleChange}
              validError={errors.email}
              errorMessage={errorsText.email}
              errorDescription={errorsDescription.email}
              label='Email'
              staticLabel
              borderColor='grey'
              borderStyle='full'
              width={320}
              height={46}
              required />
          </div>
        </div>

        <div className={styles.profileForm__formContainer}>

          <div className={styles.profileForm__inputsContainer}>
            <h2 className={styles.profileForm__inputsTitle}>Персональные данные</h2>

            <UniversalInput
              id={PROFILE_NAME_ID}
              name='name'
              value={values.name || ''}
              onChange={handleChange}
              validError={errors.name}
              pattern={PATTERN_NAME}
              label='Имя'
              staticLabel
              borderColor='grey'
              borderStyle='full'
              width={320}
              height={46} />

            <UniversalInput
              id={PROFILE_SURNAME_ID}
              name='surname'
              value={values.surname || ''}
              onChange={handleChange}
              validError={errors.surname}
              label='Фамилия'
              staticLabel
              borderColor='grey'
              borderStyle='full'
              width={320}
              height={46} />

            <DateInput
              value={date}
              label='Дата рождения'
              onChange={(val: Date | undefined) => setDate(val)}
              width={320}
              height={46} />
          </div>

          <div className={styles.profileForm__inputsContainer}>
            <h2 className={styles.profileForm__inputsTitle}>Добавить ссылку</h2>

            <UniversalInput
              id={PROFILE_VK_ID}
              name='vk'
              value={values.vk || ''}
              onChange={handleChange}
              validError={errors.vk}
              label='VK'
              staticLabel
              borderColor='grey'
              borderStyle='full'
              width={320}
              height={46} />

            <UniversalInput
              id={PROFILE_TELEGRAM_ID}
              name='telegram'
              value={values.telegram || ''}
              onChange={handleChange}
              validError={errors.telegram}
              label='Telegram'
              staticLabel
              borderColor='grey'
              borderStyle='full'
              width={320}
              height={46} />

            <UniversalInput
              id={PROFILE_WEBSITE_ID}
              name='website'
              value={values.website || ''}
              onChange={handleChange}
              validError={errors.website}
              label='Website'
              staticLabel
              borderColor='grey'
              borderStyle='full'
              width={320}
              height={46} />
          </div>

          <UniversalButton
            width={168}
            className={styles.profileForm__submitBtn}
            disabled={!isButtonDisable}>
            Сохранить
          </UniversalButton>

        </div>

      </form>

      <ConfirmPopup
        onOkButtonClick={handleSubmit}
        isOpen={confirmChangeUserDataModal}
        onClose={closePopups}
        onCancelButtonClick={onCancelClick}
        title='Сохранить введенные данные?' />

    </section>
  );
};

export default ProfileForm;
