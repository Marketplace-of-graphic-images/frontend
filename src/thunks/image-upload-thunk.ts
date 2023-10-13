import { uploadImage } from 'api/api';
import { TLicense } from 'types/types';
import { AppThunk } from '../types/store.types';

const imageUploadThunk : AppThunk = ( 
  file : File, 
  license: TLicense = 'free',
  name = 'test',
  price = 0,
  tags = '1',
) => async (dispatch) => {
  const data : FormData = new FormData();
  const ext: string = file.name.split('.').slice(-1).toString().toUpperCase();
  
  try {
    if (ext === 'JPG' || ext === 'GIF' || ext === 'PNG' || ext === 'SVG') {
      data.append('image', file);
      data.append('name', file.name);
      data.append('license', license);
      // eslint-disable-next-line
      data.append('tags', tags.toString());
      // eslint-disable-next-line
      data.append('price', price.toString());
      await uploadImage(data);
    } else {
      throw new Error('Файл неправильного формата');
    }
  } catch (error: any) {
    console.log(error);
  }
};

export default imageUploadThunk;
