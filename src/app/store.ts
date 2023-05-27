import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ProductPageReducer } from '../pages/productPage';
import { productSelectionPageReducer } from '../pages/productSelectionPage';
import { defaultPageReducer } from '../pages/defaultPage';

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
