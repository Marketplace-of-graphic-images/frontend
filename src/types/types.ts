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
  email: string
  password:string,
  // eslint-disable-next-line
  is_author:boolean
};
