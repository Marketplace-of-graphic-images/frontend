import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import Checkbox from 'ui-lib/Checkbox/Checkbox';
import { UniversalButton } from 'ui-lib/Button';
import { useDispatch } from 'react-redux';
import { closeModal } from 'store';
import styles from './ComplainPopup.module.scss';

const ComplainPopup = () => {
  const complains = [
    'Спам',
    'Оскорбительное содержание',
    'Призыв к насилию',
    'Контент для взрослых',
    'Другое',
  ];
  const dispatch = useDispatch();
  const [boxChecked, setBoxChecked] = useState(new Array(complains.length).fill(false));

  const checkBoxChecked = (position: number) => {
    const updateCheckedState = boxChecked.map((item: number, index) => (
      index === position ? !item : item));
    setBoxChecked(updateCheckedState);
  };

  const complainsButtonClick = () => {
    toast('За автором выехал чёрный воронок.', {
      duration: 3000,
      position: 'top-center',
      style: { fontSize: '18px' },
    });
    dispatch(closeModal()); // пока просто закрываем окно без сообщения
  };
  return (
    <>
      <Toaster />
      <div className={styles.ComplainPopup}>
        <h3 className={styles.ComplainPopup_title}>Пожаловаться на контент</h3>
        <p className={styles.ComplainPopup_subtitle}>Выберите тип нарушения</p>
        <div className={styles.ComplainPopup_checkBlock}>
          {complains.map((element, index) => (
            <div className={styles.ComplainPopup_cheskWidthSpan}>
              <Checkbox
                key={uuidv4()}
                id={element}
                value={element}
                onChange={() => checkBoxChecked(index)}
                checked={boxChecked[index]} />
              <span className={styles.ComplainPopup_span}>{element}</span>
            </div>
          ))}
        </div>
        <UniversalButton
          width={316}
          className={styles.ComplainPopup_button}
          onClick={complainsButtonClick}>
          Пожаловаться
        </UniversalButton>
      </div>
    </>
  );
};
export default ComplainPopup;
