import { batch } from 'react-redux';
import { getImageByTag } from 'api/api';
import { setImage, isLoadingOn, isLoadingOff } from 'store';
import { AppThunk } from 'types/store.types';
import { TAuthor1, TImage1 } from 'types/types';

const getSimilarImageThunks: AppThunk = (data: number) => async (dispatch) => {
  try {
    dispatch(isLoadingOn());
    const res: TImage1 = await getImageByTag(data);
    batch(() => {
      dispatch(setImage(res));
    });
  } catch (err: any) { 
    console.log('Ошибка');
  } finally {
    dispatch(isLoadingOff());
  }
};
export default getSimilarImageThunks;
