/* eslint-disable camelcase */
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
export type TuserDataTemp = {
  username:string,
  email: string,
  password:string,
  is_author:boolean,
};

export type TImage = {
  id?: number,
  name?: string,
  image:string,
  license?: string,
  price?: number,
  format?: string,
};

export type TAuthor = {
  id: number,
  username: string,
  profile_photo: any,
  role: string,
  num_of_author_images: number,
  is_subscribed: boolean
};
export type TApiErrors = Record<string, string>;
