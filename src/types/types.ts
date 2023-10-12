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

export type TUserShort = {
  id: number,
  username: string,
  role: 'User' | 'Author',
  profile_photo: string | null,
};

export type TImageShort = {
  id: number;
  created: Date;
  author: TUserShort;
  name: string
  image: string;
  is_favorited: boolean;
  license: 'free' | 'paid';
  price: number;
};

export type TuserDataTemp = {
  username:string,
  email: string,
  password:string,
  is_author:boolean,
};

export type TApiErrors = Record<string, string>;
