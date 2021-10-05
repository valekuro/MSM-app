import {createSlice} from '@reduxjs/toolkit';
export const initialUser: object = {};
export const UserManage = createSlice({
  name: 'UserManage',
  initialState: initialUser,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {addUser} = UserManage.actions;
export default UserManage.reducer;
