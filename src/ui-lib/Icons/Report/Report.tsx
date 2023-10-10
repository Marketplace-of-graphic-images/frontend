import React, { FC } from 'react';

type TReportIcon = {
  width: number 
  height: number
  className: string
};

const Report: FC<TReportIcon> = ({
  width, height, className, 
}) => (
  <svg width={width} height={height} viewBox='0 0 24 25' xmlns='http://www.w3.org/2000/svg' className={className}>
    <g>
      <path d='M5 21.5V4.5H14L14.4 6.5H20V16.5H13L12.6 14.5H7V21.5H5ZM14.65 14.5H18V8.5H12.75L12.35 6.5H7V12.5H14.25L14.65 14.5Z' />
    </g>
  </svg>
);

export default Report;
