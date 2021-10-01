import {createSlice} from '@reduxjs/toolkit';
export const initialList: Array<object> = [];
export const RedList = createSlice({
  name: 'RedList',
  initialState: {list: initialList},
  reducers: {
    addElement: (state, action) => {
      const AddQuantity = state.list.find(
        (item: object) => item.title === action.payload.title,
      );

      if (AddQuantity === undefined) {
        state.list.push({...action.payload, quantita: 1});
      } else {
        const newState = state.list.filter(
          (item: object) => item.title !== action.payload,
        );
        console.log(newState);
        newState.push({
          ...action.payload,
          quantita: AddQuantity.quantita + 1,
        });
        state.list = newState;
      }
    },
    removeElement: (state, action) => {
      const newState = state.list.filter(
        (item: object) => item.title !== action.payload,
      );
      state.list = newState;
    },
  },
});

export const {addElement, removeElement} = RedList.actions;
export default RedList.reducer;
