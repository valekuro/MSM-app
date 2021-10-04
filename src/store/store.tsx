import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import RedList from '../reducers/RedList';
import FavouriteList from '../reducers/FavouriteList';
export const store = configureStore({
  reducer: {
    RedList,
    FavouriteList,
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
