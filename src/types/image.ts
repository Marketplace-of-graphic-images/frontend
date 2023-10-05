import { TAuthor } from './types';

export type TImages = {
  id: number,
  created: Date,
  author?: TAuthor,
  name: string,
  image:string,
  license: string,
  format: string,
};
