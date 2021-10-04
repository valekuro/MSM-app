import {createSlice} from '@reduxjs/toolkit';
import {filterNotEqualTo} from '../utils/utilsFunctions';
export const initialList: Array<object> = [];
export const FavouriteList = createSlice({
  name: 'FavouriteList',
  initialState: {list: initialList},
  reducers: {
    addFavourite: (state, action) => {
      state.list.push({...action.payload, like: true});
    },
    removeFavourite: (state, action) => {
      const newState = filterNotEqualTo(
        state.list,
        action.payload.title,
        'title',
      );
      state.list = newState;
    },
  },
});

export const {addFavourite, removeFavourite} = FavouriteList.actions;
export default FavouriteList.reducer;
