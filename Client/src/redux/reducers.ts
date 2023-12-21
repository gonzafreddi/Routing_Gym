import { GET_USERS, GET_TRAINERS } from "./actions";

interface State {
  users: any[]; // Puedes reemplazar 'any' con un tipo específico para los usuarios
  usersCopy: any[]; // Puedes reemplazar 'any' con un tipo específico para los usuarios
  trainers: any[]; // Puedes reemplazar 'any' con un tipo específico para los entrenadores
}

const initialState: State = {
  users: [],
  usersCopy: [],
  trainers: [],
};

const reducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...action.payload].splice(0, 8),
        usersCopy: action.payload,
      };
    case GET_TRAINERS:
      return {
        ...state,
        trainers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;




// import {
//   GET_USERS,
//   GET_REVIEWS
// } from "./actions";

// const initialState = {
//   users: [],
//   usersCopy:[],
//   trainers: [],
// }


// const reducer = (state = initialState, action)=> {
//   switch (action.type) {
//       case GET_USERS:
//               return {
//                   ...state,
//                   users: [...action.payload].splice(0, 8),
//                   usersCopy: action.payload,
//               };
//       case GET_TRAINERS:
//               return {
//                   ...state,
//                   trainers: action.payload
//               };
//               default:
//                 return state;
// }
// };

// export default reducer;