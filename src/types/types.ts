/* eslint-disable camelcase */
export type Role = 'User' | 'Author';

export type TExtension = 'JPG' | 'GIF' | 'PNG' | 'SVG';

export type TLicense = 'free' | 'type1' | 'type2';

export type TUser = {
  id: number,
  username: string,
  email: string,
  role: Role,
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

export type TTagImage = {
  id: number,
  name: string,
  image: string,
};

export type TTag = {
  id: number,
  tag_images?: TImage,
  name: string,
  slug: string,
};

export type TAuthor = {
  id: number,
  username: string,
  profile_photo: string,
  role: Role,
  is_subscribed?: boolean,
  num_of_author_images?: number,
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

export type TImageFull = {
  id: number,
  created: string,
  author: TAuthor,
  name: string,
  image: string,
  is_favorited: boolean,
  license: TLicense,
  price: number | null,
  in_favorites?: number,
  tags: TTag[],
  slug: string,
  extension: TExtension,
  recommended: TImage[],
};

export type TuserDataTemp = {
  username:string,
  email: string,
  password:string,
  is_author:boolean,
};

export type TImage1 = {
  id: number,
  name?: string,
  image: string,
  license?: string,
  price?: number,
  extension?: string,
  is_favorited?: boolean,
  recommended: any,
  author: TAuthor1,
  tags: TTags[],
};

export type TAuthor1 = {
  id: number,
  username: string,
  profile_photo: any,
  role: Role,
  num_of_author_images: number,
  is_subscribed: boolean
};

export type TTags = {
  name: string,
};

export type TApiErrors = Record<string, string>;

export type TPopularImagesResponseData = {
  count: number,
  next: string,
  previous: string | null,
  results: TImage[],
};
