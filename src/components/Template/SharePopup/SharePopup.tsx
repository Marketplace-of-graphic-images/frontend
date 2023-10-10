import React from 'react';
import { useSelector } from 'services/hooks';
import { Paste } from 'ui-lib/Icons';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SharePopup.module.scss';

const SharePopup = () => {
  const { image } = useSelector((state) => state.image);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(image)
      .then(() => toast('Ссылка скопирова в буфер обмена', {
        duration: 3000,
        position: 'bottom-center',
        style: { fontSize: '18px' },
      }))
      .catch((err) => toast('ошибка копирования в буфер!', {
        duration: 3000,
        position: 'bottom-center',
        style: { fontSize: '18px' },
      }));
  };
  return (
    <>
      <Toaster />
      <div className={styles.SharePopup}>
        <h2 className={styles.SharePopup_title}>Поделиться</h2>
        <div className={styles.SharePopup_container}>
          <input className={styles.SharePopup_link} value={image} readOnly />
          <button type='button' className={styles.SharePopup_pasteButton} onClick={copyToClipboard}>
            <Paste />
          </button>
        </div>
      </div>
    </>
  );
};

export default SharePopup;
