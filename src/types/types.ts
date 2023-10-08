export type TUser = {
  id: number,
  username: string,
  email: string,
  role: 'User' | 'Author',
  first_name: string,
  last_name: string,
  vk: string,
  instagram: string,
  website: string,
  profile_photo: string | null,
  birthday: Date | null,
  count_my_images: number,
  my_subscribers: number,
  my_subscriptions: number,
};
export type TuserDataTemp = {
  username:string,
  email: string
  password:string,
  // eslint-disable-next-line
  is_author:boolean
};
