import React, { FC } from 'react';

interface ArrowDownProps {
  className?: string;
}

const ArrowDown: FC<ArrowDownProps> = ({ className }) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='24' height='24' fill='white' />
    <path className={className} d='M12 15.375L6 9.37499L7.075 8.29999L12 13.25L16.925 8.32499L18 9.39999L12 15.375Z' fill='#029992' />
  </svg>
);

ArrowDown.defaultProps = { className: '' };

export default ArrowDown;
