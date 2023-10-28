import { createContext } from 'react';
import { comparisonCartState } from '../features/comparison-cart';
import { searchState } from '../pages/search-page';
import {productDetailsState} from "../entities/product-details-card";

const store = {
  productPage: productDetailsState,
  searchPage: searchState,
  comparisonCart: comparisonCartState,
}

export { store as rootState }
export type RootStateType = typeof store;
export const RootStateContext = createContext(store);