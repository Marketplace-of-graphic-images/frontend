import { batch } from 'react-redux';
import { getImages } from '../api/api';
import {
  setMyWorksList, setIsMyWorksNext, setHistoryList, setHistoryNext,
  setFavouritesNext, setFavouritesList, isLocalLoadingOn, isLocalLoadingOff,
} from '../store';
import { AppThunk } from '../types/store.types';
import { TImageShort } from '../types/types';

interface ResponseType {
  count: number;
  next: string | null;
  previous: string | null;
  results: TImageShort[];
}

const getImagesThunk : AppThunk = (
  queryType: 'myworks' | 'favourites' | 'history',
  userId: number, 
  cardsOnPage: number, 
  page: number,
) => async (dispatch) => {
  const getImagesQuery = () => {
    const query: Record<string, 'author' | 'favorite' | 'hystory'> = {
      myworks: 'author',
      favourites: 'favorite',
      history: 'hystory',
    };

    return getImages(query[queryType], userId, cardsOnPage, page);
  };

  try {
    dispatch(isLocalLoadingOn());
    const res: ResponseType = await getImagesQuery();

    batch(() => {
      switch (queryType) {
        case 'myworks':
          dispatch(setMyWorksList(res.results));
          dispatch(setIsMyWorksNext(!!res.next));
          break;

        case 'history':
          dispatch(setHistoryList(res.results));
          dispatch(setHistoryNext(!!res.next));
          break;

        case 'favourites':
          dispatch(setFavouritesList(res.results));
          dispatch(setFavouritesNext(!!res.next));
          break;
        default: break;
      }
    });
  } catch (error: any) {
    console.log(error);
  } finally {
    dispatch(isLocalLoadingOff());
  }
};

export default getImagesThunk;
