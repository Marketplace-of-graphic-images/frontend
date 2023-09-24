import React from 'react';
import style from './Popular.module.scss';
import testImg from '../../../assets/images/pictures/404.png';
  
const Popular = () => (
  <section className={style.popular}>
    <div className={style.popular__content}>
      <h2 className={style.popular__title}>
        Рекомендации:
        <span className={style.popular__title_span}> специально для вас!</span>
      </h2>

      <div className={style.popular__imageItems}>
        <button type='button' onClick={() => {}} className={style.popular__mainlImageButton}>
          <img src={testImg} className={style.popular__mainImage} alt='Котики' />
          <span className={style.popular__mainImageCaption}>Котики</span>
        </button>

        <ul className={style.popular__fourImagesBlock}>
          <li className={style.popular__smallImageItem}>
            <button type='button' onClick={() => {}} className={style.popular__smallImageButton}>
              <img src={testImg} className={style.popular__smallImage} alt='Офисные работники' />
              <span className={style.popular__smallImageCaption}>Офисные работники</span>
            </button>
          </li>
          <li className={style.popular__smallImageItem}>
            <button type='button' onClick={() => {}} className={style.popular__smallImageButton}>
              <img src={testImg} className={style.popular__smallImage} alt='Еда' />
              <span className={style.popular__smallImageCaption}>Еда</span>
            </button>
          </li>
          <li className={style.popular__smallImageItem}>
            <button type='button' onClick={() => {}} className={style.popular__smallImageButton}>
              <img src={testImg} className={style.popular__smallImage} alt='Собачки' />
              <span className={style.popular__smallImageCaption}>Собачки</span>
            </button>
          </li>
          <li className={style.popular__smallImageItem}>
            <button type='button' onClick={() => {}} className={style.popular__smallImageButton}>
              <img src={testImg} className={style.popular__smallImage} alt='Мотивация' />
              <span className={style.popular__smallImageCaption}>Мотивация</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Popular;
