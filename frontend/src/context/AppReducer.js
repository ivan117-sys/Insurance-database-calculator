// export default (state, action) => {
//   switch (action.type) {
//     case "GET_USERS":
//       return {
//         ...state,
//         loading: false,
//         users: action.payload,
//       };
//     case "DELETE_USER":
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.payload),
//       };

//     case "ADD_USER":
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };

//     case "USER_ERROR":
//       return {
//         ...state,
//         error: action.payload,
//       };

//     // case "UPDATE_USER":
//     //   return {
//     //     ...state,
//     //     users: users.map((user) => {
//     //       if (user.id === action.payload.id) {
//     //         return action.payload;
//     //       }
//     //       return user;
//     //     }),
//     //   };

//     default:
//       return state;
//   }
// };
