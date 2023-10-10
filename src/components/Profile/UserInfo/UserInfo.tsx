import React, { FC, useEffect } from 'react';
import { UniversalButton } from 'ui-lib/Button';
import { useNavigate } from 'react-router-dom';
import { PensilIcon } from 'ui-lib/Icons';
import { useDispatch, useSelector } from '../../../services/hooks';
import styles from './UserInfo.module.scss';
import SocialLink from './SocialLink/SocialLink';
import { greyPlug } from '../../../assets/images/pictures';
import getUsersMeData from '../../../api/getUsersMe';

const UserInfo: FC = () => {
  const dispatch = useDispatch();

  const {
    role, profile_photo, vk, telegram, website, username,
    my_subscriptions, my_subscribers, count_my_images,
  } = useSelector((state) => state.user);

  useEffect(() => {
    getUsersMeData(dispatch);
  }, [dispatch]);

  const navigate = useNavigate();

  const onEditProfile = () => {
    navigate('/profile/edit');
  };

  return (
    <section className={styles.UserInfo}>

      <div className={styles.avatar_block}>

        <img
          className={styles.avatar}
          src={profile_photo || greyPlug}
          alt='Фото профиля' />

        <h3 className={styles.avatar_userNick}>
          {username}
        </h3>

        <ul className={styles.avatar_datalist}>

          {role === 'Author' && (
            <>
              <li className={styles.avatar_list}>
                <span className={styles.avatar_span}>Публикации</span>
                {count_my_images}
              </li>

              <li className={styles.avatar_list}>
                <span className={styles.avatar_span}>Подписчики</span>
                {my_subscribers}
              </li>
            </>
          )}

          <li className={styles.avatar_list}>
            <span className={styles.avatar_span}>Подписки</span>
            {my_subscriptions}
          </li>

        </ul>

      </div>

      <div className={styles.Links_block}>

        <div className={styles.Links}>
          {vk || telegram || website ? <p className={styles.Links_description}>Ссылки:</p> : null}

          {vk && <SocialLink link={vk}>VK</SocialLink>}
          {telegram && <SocialLink link={telegram}>Telegram</SocialLink>}
          {website && <SocialLink link={website}>Website</SocialLink>}
        </div>

        <UniversalButton 
          buttonStyle='borderGreen'
          width={232}
          height={49}
          onClick={onEditProfile}
          className={styles.ProfilleButton}
          icon={<PensilIcon />}>
          Изменить профиль
        </UniversalButton>

      </div>
    </section>
  );
};
export default UserInfo;
