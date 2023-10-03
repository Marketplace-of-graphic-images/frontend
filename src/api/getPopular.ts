import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'constants/baseUrl';
import { TTag, TTagImage } from 'types/types';

export const getPopular = createApi({
  reducerPath: 'getPopular',
  tagTypes: ['userInfo'],
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    fetchPopularImages: build.query<TTag[], number> ({
      query: (limit: number = 5) => ({
        url: 'tags/',
        prepareHeaders: (headers, { getState }) => {
          headers.set('credentials', 'include');
          console.log(headers);
          return headers;
      }}),
    }),
  })
});

