import { createContext } from 'react';
import { comparisonCartStore } from '../features/product/comparison-cart';
import { shoppingCartStore } from '../entities/product-cart/model';
import { searchState } from '../pages/search-page';
import {productPageStore} from "../entities/product-details/product-details-card";

const store = {
  productPage: productPageStore,
  searchPage: searchState,
  comparisonCart: comparisonCartStore,
  shoppingCart: shoppingCartStore
}

export { store as rootState }
export type RootStateType = typeof store;
export const RootStateContext = createContext(store);