import React, { FC } from 'react';
import styles from './ImageCardList.module.scss';
import ImageCardSmall from '../ImageCardSmall/ImageCardSmall';
import ImageCardBig from '../ImageCardBig/ImageCardBig';
import { TImageShort } from '../../../../../types/types';
import { LinkWordButton } from '../../../../../ui-lib/Button';
import { ArrowDownIcon } from '../../../../../ui-lib/Icons';
import Loader from '../../../../Loader/Loader';
import { useSelector } from '../../../../../services/hooks';

interface ImageCardListProps {
  renderItems: TImageShort[];
  isNextPage: boolean;
  onMoreClick: () => void;
  isBigCard?: boolean;
}

const ImageCardList: FC<ImageCardListProps> = (
  { 
    renderItems, isNextPage, onMoreClick, isBigCard = false,
  },
) => {
  const containerClass = `${styles.imageCardList__container} ${isBigCard ? styles.imageCardList__container_big : styles.imageCardList__container_small}`;

  const { isLocalLoading } = useSelector((state) => state.system);

  return (
    <section className={styles.imageCardList}>

      { isLocalLoading && !renderItems.length
        ? <Loader isBackground={false} />
        : (
          <>
            {renderItems.length 
              ? (
                <ul className={containerClass} style={{ marginBottom: isBigCard ? '48px' : '36px' }}>
                  {renderItems.map(({
                    id, image, name, is_favorited,
                  }) => (
                    isBigCard
                      // eslint-disable-next-line max-len
                      ? <ImageCardBig image={image} name={name} id={id} isLiked={is_favorited} key={id} />
                      : <ImageCardSmall image={image} name={name} id={id} key={id} />
                  ))}
                </ul>
              )
              : <p className={styles.imageCardList__empty}>Здесь пока пусто</p>}

            {isNextPage && (
              <LinkWordButton
                buttonName='Смотреть еще'
                icon={<ArrowDownIcon />}
                onClick={onMoreClick}
                className={styles.imageCardList__showMoreButton} />
            )}
          </>
        )}
    </section>
  );
};

ImageCardList.defaultProps = {
  isBigCard: false,
};

export default ImageCardList;
