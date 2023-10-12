import { downloadImage } from '../api/api';
import { AppThunk } from '../types/store.types';

const imageDownloadThunk : AppThunk = (id : number, name : string) => async (dispatch) => {
  try {
    const namePartsArr : string[] = name.split('/');
    const newFileName : string = Date.now().toString() + namePartsArr[namePartsArr.length - 1];
    await downloadImage(id, newFileName);
  } catch (error:any) {
    console.log(error);
  }
};

export default imageDownloadThunk;
