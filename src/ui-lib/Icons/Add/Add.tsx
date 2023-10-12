import React, { FC } from 'react';

type TAddIcon = {
  width: number 
  height: number
  className: string
};

const Add: FC<TAddIcon> = ({
  width, height, className, 
}) => (
  <svg width={width} height={height} viewBox='0 0 24 24' className={className} xmlns='http://www.w3.org/2000/svg'>
    <path d='M12.75 11.25H19V12.75H12.75V19H11.25V12.75L5 12.75L5 11.25L11.25 11.25L11.25 5L12.75 5L12.75 11.25Z' />
  </svg>

);

export default Add;
