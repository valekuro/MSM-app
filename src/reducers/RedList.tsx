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
      //add quantity or add element?
      if (AddQuantity === undefined) {
        state.list.push({...action.payload, quantita: 1});
      } else {
        const newState = state.list.filter(
          (item: object) => item.title !== action.payload.title,
        );
        newState.push({
          ...action.payload,
          quantita: AddQuantity.quantita + 1,
        });
        state.list = newState;
      }
    },
    removeElement: (state, action) => {
      let newState;
      const itemToDelete = state.list.filter(
        (item: object) => item.title === action.payload,
      );
      if (itemToDelete[0] && itemToDelete[0].quantita > 1) {
        itemToDelete[0].quantita = itemToDelete[0].quantita - 1;
        console.log(itemToDelete[0]);
      } else {
        newState = state.list.filter(
          (item: object) => item.title !== action.payload,
        );
        state.list = newState;
      }

      //state.list = newState;
    },
  },
});

export const {addElement, removeElement} = RedList.actions;
export default RedList.reducer;
