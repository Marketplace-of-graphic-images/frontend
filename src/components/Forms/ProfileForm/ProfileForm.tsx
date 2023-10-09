import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileForm.module.scss';
import { EmailInput, UniversalInput } from '../../../ui-lib/Input';
import {
  PROFILE_EMAIL_ID, PROFILE_TELEGRAM_ID, PROFILE_NAME_ID, PROFILE_SURNAME_ID,
  PROFILE_USERNAME_ID, PROFILE_VK_ID, PROFILE_WEBSITE_ID,
} from '../../../constants/inputsId';
import useValidation from '../../../services/useValidation';
import DateInput from '../../../ui-lib/Input/DateInput/DateInput';
import { UniversalButton, BackPageButton } from '../../../ui-lib/Button';
import { PATTERN_USERNAME } from '../../../constants/constants';
import ConfirmPopup from '../../Template/ConfirmPopup/ConfirmPopup';
import { useDispatch, useSelector } from '../../../services/hooks';
import { closeModal, openModalConfirmChangeUserData } from '../../../store/modalSlice';
import getUsersMeData from '../../../api/getUsersMe';
import patchUsersMeThunk from '../../../thunks/patch-users-me-thunk';
import Avatar from './Avatar/Avatar';
import formatDate from '../../../utils/formatDate';
import { clearAuthErr } from '../../../store';

const ProfileForm = () => {
  const {
    values,
    handleChange,
    errors,
    errorsDescription,
    isValid,
    resetForm,
  } = useValidation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [date, setDate] = useState<Date | undefined>();

  const {
    id, profile_photo, vk, telegram, website, username,
    first_name, last_name, email, birthday,
  } = useSelector((state) => state.user);

  const textUserData = useMemo(() => ({
    username, email, first_name, last_name, vk, telegram, website,
  }), [username, email, first_name, last_name, vk, telegram, website]);

  useEffect(() => {
    if (Number.isNaN(id)) {
      getUsersMeData(dispatch);
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (birthday !== null) setDate(new Date(birthday));
  }, [birthday]);

  useEffect(() => {
    resetForm(textUserData);
  }, [resetForm, textUserData]);

  // popup logic
  const { confirmChangeUserDataModal } = useSelector((state) => state.modals);

  const closePopups = () => {
    dispatch(closeModal());
  };

  // profile photo logic
  const [loadPhotoFile, setLoadPhotoFile] = useState<File | undefined>();
  const [loadPhoto, setLoadPhoto] = useState<string>('');

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0].type.match('image')) {
      setLoadPhotoFile(e.target.files[0]);

      const fileReader = new FileReader();

      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setLoadPhoto(fileReader.result);
        }
      };

      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  // submit logic
  const handleSubmit = () => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (textUserData[key] !== value) formData.append(key, value);
    });

    if (date) {
      const dateString = formatDate(date);

      if (dateString !== birthday) formData.append('birthday', dateString);
    }

    if (loadPhotoFile) formData.append('profile_photo', loadPhotoFile, loadPhotoFile.name);

    dispatch(patchUsersMeThunk(formData));

    closePopups();
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(openModalConfirmChangeUserData());
  };

  // submit button logic
  const isFormChanged = () => {
    const isTextValuesChanged = !Object.entries(values)
      .every(([key, value]) => textUserData[key] === value);

    let isDateChanged = false;

    if (date) {
      isDateChanged = formatDate(date) !== birthday;
    }

    const isPhotoChanged = !!loadPhotoFile;

    return isTextValuesChanged || isDateChanged || isPhotoChanged;
  };
  
  const isSubmitBtnDisabled = () => {
    if (!isFormChanged()) {
      return true;
    }

    return !isValid && (date ? formatDate(date) === birthday : true) && !loadPhotoFile;
  };

  // api error logic
  const resetApiErrors = () => {
    dispatch(clearAuthErr());
  };

  return (
    <section className={styles.profileForm}>

      <form className={styles.profileForm__form} onSubmit={onSubmit}>
        <BackPageButton onClick={() => navigate('/profile')} />
        <div className={styles.profileForm__formContainer}>

          <Avatar image={loadPhoto || profile_photo} onChange={handleAvatarChange} />

          <div className={styles.profileForm__inputsContainer}>
            <UniversalInput
              id={PROFILE_USERNAME_ID}
              name='username'
              value={values.username || ''}
              onChange={handleChange}
              onFocus={resetApiErrors}
              pattern={PATTERN_USERNAME}
              validError={errors.username}
              errorDescription={errorsDescription.username}
              // apiErrorMessage={}
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
              onFocus={resetApiErrors}
              validError={errors.email}
              errorDescription={errorsDescription.email}
              // apiErrorMessage={}
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
              name='first_name'
              value={values.first_name || ''}
              onChange={handleChange}
              validError={errors.first_name}
              label='Имя'
              staticLabel
              borderColor='grey'
              borderStyle='full'
              width={320}
              height={46} />

            <UniversalInput
              id={PROFILE_SURNAME_ID}
              name='last_name'
              value={values.last_name || ''}
              onChange={handleChange}
              validError={errors.last_name}
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
            disabled={isSubmitBtnDisabled()}>
            Сохранить
          </UniversalButton>

        </div>

      </form>

      <ConfirmPopup
        onOkButtonClick={handleSubmit}
        isOpen={confirmChangeUserDataModal}
        onClose={closePopups}
        onCancelButtonClick={() => closePopups()}
        title='Сохранить введенные данные?' />

    </section>
  );
};

export default ProfileForm;
