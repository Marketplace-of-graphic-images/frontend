export type TUser = {
  id: number | null,
  username: string | null,
  email: string | null,
  bio?: string | null,
};
export type TuserDataTemp = {
  username:string,
  email: string
  password:string,
  // eslint-disable-next-line
  is_author:boolean
};
