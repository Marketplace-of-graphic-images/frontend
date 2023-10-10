import { baseUrl } from 'constants/baseUrl';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TTag } from 'types/types';

const getPopular = createApi({
  reducerPath: 'getPopular',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    fetchPopularImages: build.query <TTag[], number | string>({
      query: () => ({
        url: 'tags/',
        credentials: 'include', 
      }),
    }),
  }),
});

export { getPopular };
