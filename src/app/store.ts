import { searchPageStore } from '../pages/searchPage';
import { createContext } from 'react';
import { defaultPageStore } from '../pages/defaultPage';
import { productPageStore } from '../pages/productPage';
import { comparisonCartStore } from '../entities/comparisonCart';
import { shoppingCartStore } from '../entities/productCart/model';

const store = {
  defaultPage: defaultPageStore,
  productPage: productPageStore,
  searchPage: searchPageStore,
  comparisonCart: comparisonCartStore,
  shoppingCart: shoppingCartStore
}

export { store as rootState }
export type RootStateType = typeof store;
export const RootStateContext = createContext(store);