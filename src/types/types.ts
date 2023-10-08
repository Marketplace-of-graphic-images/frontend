/* eslint-disable camelcase */
export type TUser = {
  id: number | null,
  username: string | null,
  email: string | null,
  bio?: string | null,
};

export type TImage = {
  id: number,
  created: Date,
  name: string,
  image:string,
  license: string,
  price: number,
  format: string,
};

export type TAuthor = {
  id: number,
  username: string,
  profile_photo: any,
  role: string,
  num_of_author_images: number,
  is_subscribed: boolean
};
