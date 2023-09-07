import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const testUrl = 'https://jsonplaceholder.typicode.com/users';

export const getUser = createApi({
  reducerPath: 'getUser',
  tagTypes: ['userInfo'],
  baseQuery: fetchBaseQuery({
    baseUrl: testUrl,
  }),
  endpoints: (builder) => ({
    getAllusers: builder.query<[{ id: number, name: string }], string>({
      query: () => '/',
    }),
  }),
});
export const { useGetAllusersQuery } = getUser;
