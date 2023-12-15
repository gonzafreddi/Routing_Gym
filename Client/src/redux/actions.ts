import axios from 'axios';
import { Dispatch } from 'redux';

// Tipos de acciones
export const GET_USERS = "GET_USERS";
export const GET_TRAINERS = "GET_TRAINERS";

interface User {
  // Define la estructura del objeto de usuario
}

interface Trainer {
  // Define la estructura del objeto de entrenador
}

// Tipos de acciones
interface GetUsersAction {
  type: typeof GET_USERS;
  payload: User[];
}

interface GetTrainersAction {
  type: typeof GET_TRAINERS;
  payload: Trainer[];
}

// Tipos combinados de acciones
export type ActionTypes = GetUsersAction | GetTrainersAction;

// Acciones
export const getUsers = () => {
    return async function (dispatch: Dispatch<ActionTypes>) {
      try {
        const userData = await axios("/user");
        const users: User[] = userData.data;
        dispatch({ type: GET_USERS, payload: users });
      } catch (error) {
        if (error instanceof Error) {
          console.log("error en devolver la action", error.message);
        } else {
          console.log("Error desconocido:", error);
        }
      }
    };
  };
  
  export const getTrainers = () => {
    return async function (dispatch: Dispatch<ActionTypes>) {
      try {
        const trainerData = await axios("/personalTrainer");
        const trainers: Trainer[] = trainerData.data;
        dispatch({ type: GET_TRAINERS, payload: trainers });
      } catch (error) {
        if (error instanceof Error) {
          console.log("error en devolver la action", error.message);
        } else {
          console.log("Error desconocido:", error);
        }
      }
    };
  };
  
  export function postExercise(payload: any) {
    return async function (dispatch: Dispatch<ActionTypes>) {
      try {
        const response = await axios.post("/exercise", payload);
        return response;
      } catch (error) {
        if (error instanceof Error) {
          return error.message;
        } else {
          return "Error desconocido";
        }
      }
    };
  }
  