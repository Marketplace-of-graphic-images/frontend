import React from 'react';
import style from './Advantages.module.scss';

const Advantages = () => {
  console.log('Advantages');
  return (
    <div className={style.advantages}>
      <div className={style.advantages__container_title}>
        <h2 className={style.advantages__title}>
          <span className={style.advantages__colortext}>Идеальный вариант </span> 
          для развития творчества
        </h2>
        <p className={style.advantages__subtitle}>
          Независимо от того, ищете ли вы готовые дизайны или захватывающие фотографии, 
          здесь всегда найдете источник вдохновения
        </p>
      </div>
      <div className={style.advantages__container_card}>
        <div className={style.advantages__card}>
          <div className={style.advantages__icon_container}>
            <p>icon</p>
          </div>
          <div className={style.advantages__text_container}>
            <h3 className={style.advantages__card_title}>Качественный авторский контент</h3>
            <p className={style.advantages__card_text}>
              Поднимите ваши проекты на новый уровень, добавив великолепные изображения, 
              видео или анимации в высоком качестве.
            </p>
          </div>
        </div>
        <div className={style.advantages__card}>
          <div className={style.advantages__icon_container}>
            <p>icon</p>
          </div>
          <div className={style.advantages__text_container}>
            <h3 className={style.advantages__card_title}>Готовые ресурсы</h3>
            <p className={style.advantages__card_text}>
              Погрузитесь в огромный арсенал изображений и необычных решений на любой вкус, 
              который может восхитить любую публику.
            </p>
          </div>
        </div>
        <div className={style.advantages__card}>
          <div className={style.advantages__icon_container}>
            <p>icon</p>
          </div>
          <div className={style.advantages__text_container}>
            <h3 className={style.advantages__card_title}>Детальный поиск</h3>
            <p className={style.advantages__card_text}>
              Каждый проект обретет свою уникальную визуальную концепцию и стиль, 
              способные воплотить любые из ваших потребностей и фантазий.
            </p>
          </div>
        </div>
        <div className={style.advantages__card}>
          <div className={style.advantages__icon_container}>
            <p>icon</p>
          </div>
          <div className={style.advantages__text_container}>
            <h3 className={style.advantages__card_title}>Постоянные обновления</h3>
            <p className={style.advantages__card_text}>
              В нашей библиотеке всегда найдется что-то новое и вдохновляющее, 
              благодаря ежедневным обновлениям и пополнениям.
            </p>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Advantages;
