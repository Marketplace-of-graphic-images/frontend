/* eslint-disable camelcase */
export type Role = 'User' | 'Author';

export type TLicense = 'free' | 'type1' | 'type2';

export type TUser = {
  id: number,
  username: string,
  email: string,
  role: 'User' | 'Author',
  first_name: string,
  last_name: string,
  vk: string,
  telegram: string,
  website: string,
  profile_photo: string | null,
  birthday: string | null,
  count_my_images: number,
  my_subscribers: number,
  my_subscriptions: number,
  userDataTemp?: TuserDataTemp | null
};

export type TTagImage = {
  id: number,
  name: string,
  image: string,
};

export type TTag = {
  id: number,
  tag_images: TImage,
  name: string,
  slug: string,
};

export type TAuthor = {
  id: number,
  username: string,
  profile_photo: string | null,
  role: string,
};

export type TImage = {
  id: number,
  created: string,
  author: TAuthor,
  slug: string,
  name: string,
  image: string,
  is_favorited: boolean,
  license: TLicense,
  price: number | null,
};
export type TuserDataTemp = {
  username:string,
  email: string,
  password:string,
  is_author:boolean,
};

export type TImage1 = {
  id?: number,
  name?: string,
  image:string,
  license?: string,
  price?: number,
  format?: string,
};

export type TAuthor1 = {
  id: number,
  username: string,
  profile_photo: any,
  role: string,
  num_of_author_images: number,
  is_subscribed: boolean
};
export type TApiErrors = Record<string, string>;
