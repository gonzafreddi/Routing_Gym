import axios from 'axios';

export const GET_USERS = "GET_USERS";
export const GET_TRAINERS = "GET_TRAINERS";

interface GetUsersAction {
  type: typeof GET_USERS;
  payload: any[]; // Reemplaza 'any[]' con el tipo correcto de tu array de usuarios
}

export const getUsers = (): ((dispatch: (action: GetUsersAction) => void) => Promise<void>) => {
  return async (dispatch) => {
    try {
      const usersData = await axios("/user");
      const users = usersData.data;
      dispatch({ type: GET_USERS, payload: users });
    } catch (error) {
      console.log("error fetching users", error.message);
    }
  };
};

export const getTrainers = () => {
  return async (dispatch: Function) => {
    try {
      const trainersData = await axios("/personalTrainer");
      const trainers = trainersData.data;
      dispatch({ type: GET_TRAINERS, payload: trainers });
    } catch (error) {
      console.log("error fetching trainers", error.message);
    }
  };
};




// export const GET_USERS = "GET_USERS";
// export const GET_TRAINERS = "GET_TRAINERS";



// export const getUsers = () => {
//   return async function (dispatch) {
//     try {
//       const usersData = await axios("/user");
//       const users = usersData.data;
//       dispatch({ type: GET_USERS, payload: users });
//     } catch (error) {
//       console.log("error en devolver la action", error.message);
//     }
//   };
// };

// export const getTrainers = () => {
//   return async function (dispatch) {
//     try {
//       const trainersData = await axios("/personalTrainer");
//       const trainers = trainersData.data;
//       dispatch({ type: GET_TRAINERS, payload: trainers });
//     } catch (error) {
//       console.log("error en devolver la action", error.message);
//     }
//   };
// };

