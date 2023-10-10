import React, { useEffect, useMemo } from 'react';
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
    isMainPageImagesLoading,
    popularImagesLoaded,
    popularTagsLoaded,
    popularPhotos,
    popularGifs,
    popularVectors,
    popularTags,
  } = useSelector((state) => state.mainPageImages);
  
  const { userRole, isLoggedIn } = useSelector((state) => state.system);

  useEffect(() => {
    dispatch(mainPageImagesDownloadThunk(isLoggedIn));
    console.log(userRole);
  }, []);

  return (
    <>
      <SearchSection />

      {popularImagesLoaded && (
        <>
          <TitleMainSection
            titleAccent='Погрузитесь в мир'
            title='популярных категорий!' />
          <ImageCardsSection cards={popularPhotos} title='Популярные фотографии' link='/' isLoggedIn={isLoggedIn}/>
          <ImageCardsSection cards={popularGifs} title='Популярные Gif' link='/' isLoggedIn={isLoggedIn}/>
          <ImageCardsSection cards={popularVectors} title='Популярные векторы' link='/' isLoggedIn={isLoggedIn}/>
        </>
      )}

      {popularTagsLoaded && <Popular data={popularTags} />}

      <TitleMainSection
        titleAccent='Погрузитесь в мир'
        title='популярных категорий!' />

      <JoinTheCommunity />
    </>
  );
};
export default MainUser;
