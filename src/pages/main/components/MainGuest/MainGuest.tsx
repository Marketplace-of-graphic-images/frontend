import React, { useMemo, useEffect } from 'react';
import JoinTheCommunity from 'components/main/JoinTheCommunity/JoinTheCommunity';
import AdSection from 'components/main/AdSection/AdSection';
import Advantages from 'components/main/Advantages/Advantages';
import ImageCardsSection from 'components/main/ImageCardsSection/ImageCardsSection';
import { TRUE } from 'node-sass';
import { useDispatch, useSelector } from 'services/hooks';
import mainPageImagesDownloadThunk from 'thunks/main-page-thunk';
import SearchSection from '../../../../components/main/SearchSection/SearchSection';
import TitleMainSection from '../../../../components/main/TitleMainSection/TitleMainSection';

const MainGuest = () => {
  const dispatch = useDispatch();
  const { 
    isMainPageImagesLoading,
    popularImagesLoaded,
    popularTagsLoaded,
    popularPhotos,
    popularGifs,
    popularVectors,
    popularTags,
  } = useSelector((state) => state.mainPageImages);
  
  const { isLoggedIn } = useSelector((state) => state.system);

  useEffect(() => {
    dispatch(mainPageImagesDownloadThunk(isLoggedIn));
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <SearchSection />

      <AdSection />
      
      {popularImagesLoaded && (
        <>
          <TitleMainSection
            titleAccent='Погрузитесь в мир'
            title='популярных категорий!' />
          <ImageCardsSection cards={popularPhotos} title='Популярные фотографии' link='/' isLoggedIn={isLoggedIn} />
          <ImageCardsSection cards={popularGifs} title='Популярные Gif' link='/' isLoggedIn={isLoggedIn} />
          <ImageCardsSection cards={popularVectors} title='Популярные векторы' link='/' isLoggedIn={isLoggedIn} />
        </>
      )}

      <Advantages />

      <JoinTheCommunity />
    </>
  );
};
export default MainGuest;
