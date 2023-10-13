import React, { useEffect, useMemo } from 'react';
import { batch } from 'react-redux';
import { useDispatch, useSelector } from 'services/hooks';
import mainPageImagesDownloadThunk from 'thunks/main-page-thunk';
import JoinTheCommunity from 'components/main/JoinTheCommunity/JoinTheCommunity';
import Advantages from 'components/main/Advantages/Advantages';
import ImageCardsSection from 'components/main/ImageCardsSection/ImageCardsSection';
import SearchSection from '../../../../components/main/SearchSection/SearchSection';
import TitleMainSection from '../../../../components/main/TitleMainSection/TitleMainSection';
import Popular from '../../../../components/main/Popular/Popular';

const MainUser = () => {
  const dispatch = useDispatch();
  const { 
    popularImagesLoaded,
    popularTagsLoaded,
    popularPhotos,
    popularGifs,
    popularVectors,
    popularTags,
  } = useSelector((state) => state.mainPageImages);
  
  const { isLoggedIn } = useSelector((state) => state.system);
  const { role } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(mainPageImagesDownloadThunk(isLoggedIn));
  }, [dispatch, isLoggedIn]);

  // временные данные. Вообще всё это нужно получать по запросу к апи по ID картинки
  
  return (
    <>
      <SearchSection />

      {popularImagesLoaded && (
        <>
          <TitleMainSection
            titleAccent='Погрузитесь в мир'
            title='популярных категорий!' />
          <ImageCardsSection cards={popularPhotos} title='Популярные фотографии' link='/' isLoggedIn={isLoggedIn} />
          <ImageCardsSection cards={popularGifs} title='Популярные Gif' link='/' isLoggedIn={isLoggedIn} />
          <ImageCardsSection cards={popularVectors} title='Популярные наборы иконок' link='/' isLoggedIn={isLoggedIn} />
        </>
      )}

      {popularTagsLoaded && <Popular data={popularTags} />}

      <JoinTheCommunity />
    </>
  );
};
export default MainUser;
