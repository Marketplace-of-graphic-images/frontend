export type Role = 'User' | 'Author';

export type TLicense = 'free' | 'type1' | 'type2';

export type TUser = {
  id: number | null,
  username: string | null,
  email: string | null,
  bio?: string | null,
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
