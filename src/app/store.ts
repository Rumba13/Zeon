import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ProductPageReducer } from '../pages/productPage';
import { defaultPageReducer } from '../pages/defaultPage';
import { productSelectionPageReducer } from '../pages/searchPage';

export const store = configureStore({
  reducer: {
    productPage:ProductPageReducer,
    productSelectionPage: productSelectionPageReducer,
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
