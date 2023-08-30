import React, { FC } from 'react';

interface ArrowUpProps {
  className?: string;
}

const ArrowUp: FC<ArrowUpProps> = ({ className }) => (
  <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='24' height='24' transform='translate(0 0.350586)' fill='white' />
    <path className={className} d='M7.075 15.7256L6 14.6506L12 8.65063L18 14.6256L16.925 15.7006L12 10.7756L7.075 15.7256Z' fill='#029992' />
  </svg>

);

ArrowUp.defaultProps = { className: '' };

export default ArrowUp;
