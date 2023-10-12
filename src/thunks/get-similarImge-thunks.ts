import { batch } from 'react-redux';
import { getImageByTag } from 'api/api';
import {
  setImage, 
  isLoadingOn, 
  isLoadingOff, 
} from 'store';
import { AppThunk } from 'types/store.types';
import { TImage1, TImageFull } from 'types/types';

const getSimilarImageThunks: AppThunk = (data: number) => async (dispatch) => {
  try {
    const res: TImageFull = await getImageByTag(data);

    batch(() => {
      dispatch(setImage(res));
    });
  } catch (err: any) { 
    console.log('Ошибка');
  } finally {
    console.log('res');
  }
};
export default getSimilarImageThunks;
