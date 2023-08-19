import React, { FC } from 'react';
import styles from './NoVisionIcon.module.scss';

type TTemplateIcone = {
  icon: any;
  width?: string | number;
  alt?: string;
  height?: string | number;
  className?:string;
};

const TemplateIcone: FC<TTemplateIcone> = ({
  icon, alt, width = '24', height = '24',
  className = '',

}) => (
  <img
    className={className}
    style={{ width: `${String(width)}px`, height: `${String(height)}px` }}
    src={icon}
    alt={alt} />
);
TemplateIcone.defaultProps = {
  alt: 'Картинка',
  width: '24',
  height: '24',
  className: '',
};

export default TemplateIcone;
