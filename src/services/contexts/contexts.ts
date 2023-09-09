import { createContext } from 'react';

/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export interface ISwiperContext {
  isBegin: boolean;
  isEnd: boolean;
  changeIsBegin: (val: boolean) => void;
  changeIsEnd: (val: boolean) => void;
}

export const SwiperContext = createContext<ISwiperContext>({
  isBegin: true,
  isEnd: false,
  changeIsBegin: (val) => {},
  changeIsEnd: (val) => {},
});
