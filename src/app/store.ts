import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ProductPageReducer } from '../pages/productPage';
import { defaultPageReducer } from '../pages/defaultPage';
import { searchPageReducer } from '../pages/searchPage';

export const store = configureStore({
  reducer: {
    productPage: ProductPageReducer,
    searchPage: searchPageReducer,
    defaultPage: defaultPageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
