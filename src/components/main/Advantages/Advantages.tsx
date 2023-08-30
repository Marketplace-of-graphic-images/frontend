import React, { FC } from 'react';
import style from './Advantages.module.scss';
import BricksGreenIcon from '../../../ui-lib/Icons/Bricks/BricksGreenIcon';
import LoupeGreenIcon from '../../../ui-lib/Icons/Loupe/LoupeGreenIcon';
import RefreshGreenIcon from '../../../ui-lib/Icons/Refresh/RefreshGreenIcon';
import AuthorGreenIcon from '../../../ui-lib/Icons/Autor/AuthorGreenIcon';
import TitleMainSection from '../TitleMainSection/TitleMainSection';
  
const Advantages: FC = () => (
  <section className={style.advantages}>
    <div className={style.advantages__container_title}>
      <TitleMainSection 
        titleAccent='Идеальный вариант'
        title='для развития творчества' 
        subtitle='Независимо от того, ищете ли вы готовые дизайны или захватывающие фотографии, 
        здесь всегда найдете источник вдохновения' />
    </div>
    
    <ul className={style.advantages__container_card}>
      <li className={style.advantages__card}>
        <div className={style.advantages__icon_container}>
          <AuthorGreenIcon />
        </div>
        <div className={style.advantages__text_container}>
          <h3 className={style.advantages__card_title}>Качественный авторский контент</h3>
          <p className={style.advantages__card_text}>
            Поднимите ваши проекты на новый уровень, добавив великолепные изображения, 
            видео или анимации в высоком качестве.
          </p>
        </div>
      </li>
      <li className={style.advantages__card}>
        <div className={style.advantages__icon_container}>
          <BricksGreenIcon />
        </div>
        <div className={style.advantages__text_container}>
          <h3 className={style.advantages__card_title}>Готовые ресурсы</h3>
          <p className={style.advantages__card_text}>
            Погрузитесь в огромный арсенал изображений и необычных решений на любой вкус, 
            который может восхитить любую публику.
          </p>
        </div>
      </li>
      <li className={style.advantages__card}>
        <div className={style.advantages__icon_container}>
          <LoupeGreenIcon />
        </div>
        <div className={style.advantages__text_container}>
          <h3 className={style.advantages__card_title}>Детальный поиск</h3>
          <p className={style.advantages__card_text}>
            Каждый проект обретет свою уникальную визуальную концепцию и стиль, 
            способные воплотить любые из ваших потребностей и фантазий.
          </p>
        </div>
      </li>
      <li className={style.advantages__card}>
        <div className={style.advantages__icon_container}>
          <RefreshGreenIcon />
        </div>
        <div className={style.advantages__text_container}>
          <h3 className={style.advantages__card_title}>Постоянные обновления</h3>
          <p className={style.advantages__card_text}>
            В нашей библиотеке всегда найдется что-то новое и вдохновляющее, 
            благодаря ежедневным обновлениям и пополнениям.
          </p>
        </div>
      </li>
    </ul> 
  </section>
);

export default Advantages;
