import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink, useNavigate } from 'react-router-dom';
import ImageCardList from './components/ImageCardList/ImageCardList';
import styles from './Content.module.scss';
import { useDispatch, useSelector } from '../../../services/hooks';
import { setMyWorksPage } from '../../../store';
import getImagesThunk from '../../../thunks/get-images-thunk';
import { UniversalInput } from '../../../ui-lib/Input';
import { SearchIconGreen } from '../../../ui-lib/Icons';
import Wallet from './components/Wallet/Wallet';
import JoinToAuthorsBanner from './components/JoinToAuthorsBanner/JoinToAuthorsBanner';

const Content = () => {
  const dispatch = useDispatch();
  const { content } = useParams();
  const navigate = useNavigate();

  const {
    myWorksList, myWorksPage, isMyWorksNext,
    historyList, historyPage, isHistoryNext,
    favouritesList, favouritesPage, isFavouritesNext,
    // clearAllCardLists,
  } = useSelector((state) => state.profileCards);

  const { role } = useSelector((state) => state.user);

  const [isRerender, setIsRerender] = useState({
    myWorks: false, history: false, favourites: false,
  });

  useEffect(() => {
    switch (true) {
      case content === 'myworks' && isMyWorksNext && !isRerender.myWorks:
        dispatch(getImagesThunk('myworks', 13, 15, myWorksPage));
        setIsRerender({ ...isRerender, myWorks: true });
        break;

      case content === 'history' && isHistoryNext && !isRerender.history:
        dispatch(getImagesThunk('history', 13, 15, historyPage));
        setIsRerender({ ...isRerender, history: true });
        break;

      case content === 'favourites' && isFavouritesNext && !isRerender.favourites:
        dispatch(getImagesThunk('favourites', 13, 4, favouritesPage));
        setIsRerender({ ...isRerender, favourites: true });
        break;

      default: break;
    }
    // eslint-disable-next-line
  }, [content, dispatch, favouritesPage, historyPage, myWorksPage]);

  useEffect(() => {
    console.log(role);
    if (role === 'Author') {
      navigate('/profile/myworks');
    } else {
      navigate('/profile/history');
    }
    // eslint-disable-next-line
  }, []);

  const navLinkClass = ({ isActive }) => {
    if (isActive) {
      return `${styles.content__navLink} ${styles.content__navLink_active}`;
    }

    return styles.content__navLink;
  };

  const onMoreMyWorksClick = () => {
    dispatch(setMyWorksPage(myWorksPage + 1));
    setIsRerender({ ...isRerender, myWorks: false });
  };

  const onMoreHistoryClick = () => {
    dispatch(setMyWorksPage(myWorksPage + 1));
    setIsRerender({ ...isRerender, myWorks: false });
  };

  const onMoreMyFavouritesClick = () => {
    dispatch(setMyWorksPage(myWorksPage + 1));
    setIsRerender({ ...isRerender, myWorks: false });
  };
  
  return (
    <section className={styles.content}>
      {role !== 'Author' && <JoinToAuthorsBanner />}

      {role === 'Author' && (
        <div className={styles.content__searchContainer}>
          {content !== 'wallet' && (
          <UniversalInput
            id='profile-search'
            borderColor='grey'
            borderStyle='full'
            staticLabel
            width={300}
            icon={<SearchIconGreen />} />
          )}
        </div>
      )}

      <div className={styles.content__navContainer}>

        <nav className={styles.content__nav}>
          {role === 'Author' && <NavLink className={navLinkClass} to='/profile/myworks'>Мои работы</NavLink>}
          <NavLink className={navLinkClass} to='/profile/history'>История загрузок</NavLink>
          {role === 'Author' && <NavLink className={navLinkClass} to='/profile/wallet'>Кошелек</NavLink>}
          <NavLink className={navLinkClass} to='/profile/favourites'>Избранное</NavLink>
        </nav>

        {role === 'User' && content !== 'wallet' && (
          <UniversalInput
            id='profile-search'
            borderColor='grey'
            borderStyle='full'
            staticLabel
            width={300}
            icon={<SearchIconGreen />} />
        )}
      </div>

      {content === 'myworks' && (
        <ImageCardList
          onMoreClick={onMoreMyWorksClick}
          renderItems={myWorksList}
          isNextPage={isMyWorksNext} />
      )}

      {content === 'history' && (
        <ImageCardList
          onMoreClick={onMoreHistoryClick}
          renderItems={historyList}
          isNextPage={isHistoryNext} />
      )}

      {content === 'favourites' && (
        <ImageCardList
          onMoreClick={onMoreMyFavouritesClick}
          renderItems={favouritesList}
          isNextPage={isFavouritesNext}
          isBigCard />
      )}

      {content === 'wallet' && <Wallet />}

    </section>
  );
};

export default Content;
