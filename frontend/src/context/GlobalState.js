// import React, { createContext, useReducer, useEffect } from "react";
// import AppReducer from "./AppReducer";
// import axios from "axios";

// // Initial state

// const initialState = {
//   users: [],
//   error: null,
//   loading: true,
// };

// // Create context
// export const GlobalContext = createContext(initialState);

// // Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   // Actions

//   async function getUsers() {
//     try {
//       const res = await axios.get("http://localhost:5000/api/v1/users");
//       console.log(res);
//       dispatch({
//         type: "GET_USERS",
//         payload: res.data.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: "USER_ERROR",
//         payload: err.response.data.error,
//       });
//     }
//   }

//   function deleteUser(id) {
//     dispatch({
//       type: "DELETE_USER",
//       payload: id,
//     });
//   }

//   async function addUser(user) {
//     const config = {
//       headers: {
//         "Content-Type": "aplication/json",
//       },
//     };

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/v1/users",
//         user,
//         config
//       );
//       dispatch({
//         type: "ADD_USER",
//         payload: res.data.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: "USER_ERROR",
//         payload: err.response.data.error,
//       });
//     }
//   }

//   function updateUser(user) {
//     dispatch({
//       type: "UPDATE_USER",
//       payload: user,
//     });
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         users: state.users,
//         error: state.error,
//         loading: state.loading,
//         getUsers,
//         deleteUser,
//         addUser,
//         updateUser,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
