import React, { FC } from 'react';
import styles from './ValidationErrorTooltip.module.scss';

export interface IValidationErrorTooltipProps {
  paragraphElemArray?: Array<string>,
  listElemArray?: Array<string>,
  opacity?: string,
  position?: 'absolute' | 'relative',
  width?: string,
  top?: string,
  left?: string,
  right?: string,
  bottom?: string,
}

const ValidationErrorTooltip: FC<IValidationErrorTooltipProps> = (
  {
    paragraphElemArray = [],
    listElemArray = [],
    opacity = '1',
    position = 'absolute',
    width = '370px',
    top = '-13px',
    left = '55px',
    right = '0',
    bottom = '0',
  },
) => (
  <section
    className={styles['validation-tooltip']}
    style={{
      opacity, position, width, top, left, right, bottom,
    }}>
    { paragraphElemArray.map((textItem, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <p className={styles['validation-tooltip__text']} key={i}>
        { textItem }
      </p>
    ))}
    <ul className={styles['validation-tooltip__list']}>
      { listElemArray.map((listItem, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className={styles['validation-tooltip__item']} key={i}>
          { listItem }
        </li>
      ))}
    </ul>
  </section>
);

ValidationErrorTooltip.defaultProps = {
  paragraphElemArray: [],
  listElemArray: [],
  opacity: '1',
  position: 'absolute',
  width: '370px',
  top: '-13px',
  left: '55px',
  right: '0',
  bottom: '0',
};

export default ValidationErrorTooltip;
