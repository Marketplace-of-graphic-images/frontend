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
}

export type TTag = {
  id: number,
  tag_images: TTagImage[],
  name: string,
  slug: string,
}
