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
  format: string,
};

export type TAuthor = {
  id: number,
  username: string,
  profile_photo: string | null,
  role: string,
  num_of_author_images: number,
  is_subscribed: boolean
};

export type TTagImages = {
  [index: number]: {
    id: number,
    name: string,
    image: string
  }
};

export type TTags = {
  [index: number]: {
    id: number,
    tag_images: TTagImages,
    name: string,
    slug: string
  }
};
