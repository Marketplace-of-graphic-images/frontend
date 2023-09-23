import React, { FC } from 'react';
import style from './Popular.module.scss';
import { Link } from 'react-router-dom';
import testImg from '../../../assets/images/pictures/pic.jpg';
  
const Popular: FC = () => (
  <section className={style.popular}>
    <div className={style.popular__content}>
      <h2 className={style.popular__title}>Рекомендации:
        <span className={style.popular__title_span}> специально для вас!</span>
      </h2>

      <div className={style.popular__imageItems}>
        <div className={style.popular__mainlImageItem}>
          <Link to="#">
            <img src={testImg} className={style.popular__mainImage} alt="Котики" />
            <span className={style.popular__mainImageCaption}>Котики</span>
          </Link>
        </div>

        <ul className={style.popular__fourImagesBlock}>
          <li className={style.popular__smallImageItem}>
            <Link to="#">
              <img src={testImg} className={style.popular__smallImage} alt="Офисные работники" />
              <span className={style.popular__smallImageCaption}>Офисные работники</span>
            </Link>
          </li>
          <li className={style.popular__smallImageItem}>
            <Link to="#">
              <img src={testImg} className={style.popular__smallImage} alt="Еда" />
              <span className={style.popular__smallImageCaption}>Еда</span>
            </Link>
          </li>
          <li className={style.popular__smallImageItem}>
            <Link to="#">
              <img src={testImg} className={style.popular__smallImage} alt="Собачки" />
              <span className={style.popular__smallImageCaption}>Собачки</span>
            </Link>
          </li>
          <li className={style.popular__smallImageItem}>
            <Link to="#">
              <img src={testImg} className={style.popular__smallImage} alt="Мотивация" />
              <span className={style.popular__smallImageCaption}>Мотивация</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Popular;
