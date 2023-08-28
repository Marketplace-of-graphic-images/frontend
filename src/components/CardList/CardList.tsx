import React, { FC } from 'react';
import Card from '../Card/Card';

interface CardListProps {
  items: Array<Record<string, any>>;
}

const CardList: FC<CardListProps> = ({ items }) => (
  <>
    {items.map(({ title, image, id }) => (
      <Card title={title} imageLink={image} key={id} />
    ))}
  </>
);

export default CardList;
