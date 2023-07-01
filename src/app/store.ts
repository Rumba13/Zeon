import { searchPageState } from '../pages/searchPage';
import { createContext } from 'react';
import { defaultPageState } from '../pages/defaultPage';
import { productPageState } from '../pages/productPage';
import { comparisonCartStore } from '../entities/comparisonCart';
import { shoppingCartStore } from '../entities/productCart/model';

const store = { //TODO rename all states to stores
  defaultPage: defaultPageState,
  productPage: productPageState,
  searchPage: searchPageState,
  comparisonCart: comparisonCartStore,
  shoppingCart: shoppingCartStore
}

export { store as rootState }
export type RootStateType = typeof store;
export const RootStateContext = createContext(store);