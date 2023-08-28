import React, { FC } from 'react';
import ImageCard from './components/ImageCard/ImageCard';

interface CardListProps {
  items: Array<Record<string, any>>;
}

const ImageCardRenderer: FC<CardListProps> = ({ items }) => (
  <>
    {items.map(({ title, image, id }) => (
      <ImageCard title={title} imageLink={image} key={id} />
    ))}
  </>
);

export default ImageCardRenderer;
