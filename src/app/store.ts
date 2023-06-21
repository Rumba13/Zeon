import { searchPageState } from '../pages/searchPage';
import { createContext } from 'react';
import { defaultPageState } from '../pages/defaultPage';
import { productPageState } from '../pages/productPage';

const store = {
  defaultPage: defaultPageState,
  productPage: productPageState,
  searchPage: searchPageState,
}

export { store as rootState }
export type RootStateType = typeof store;
export const RootStateContext = createContext(store);