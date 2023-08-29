// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//     currentUser: null,
//     loading: false,
//     error: false,
//   };

//   export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//       loginStart: (state) => {
//         state.loading = true;
//       },
//       loginSuccess: (state, action) => {
//         state.loading = false;
//         state.currentUser = action.payload.firstName;
//       },
//       loginFailure: (state) => {
//         state.loading = false;
//         state.error = true;
//       },
//       logout: (state) => {
//         state.currentUser = null;
//         state.loading = false;
//         state.error = false;
//       },
//       update: (state, action) => {
//         state.currentUser.firstName = action.payload.firstName;
//         state.currentUser.lastName = action.payload.lastName;
//         state.currentUser.mobileName = action.payload.mobileName;
//         state.currentUser.gender = action.payload.gender;
//       },
     
//     },
//   });
  
//   export const { loginStart, loginSuccess, loginFailure, logout,update,updatekycStatus} =
//     userSlice.actions;
  
//   export default userSlice.reducer;