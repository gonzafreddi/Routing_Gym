import { ActionTypes, GET_USERS, GET_TRAINERS } from './actions';
import { combineReducers } from 'redux';

interface UsersState {
  users: any[]; // Reemplaza 'any[]' con el tipo específico de usuario que esperas
  usersCopy: any[]; // Reemplaza 'any[]' con el tipo específico de usuario que esperas
}

interface TrainersState {
  trainers: any[]; // Reemplaza 'any[]' con el tipo específico de entrenador que esperas
}

interface RootState {
  users: UsersState;
  trainers: TrainersState;
}

const initialUsersState: UsersState = {
  users: [],
  usersCopy: [],
};

const initialTrainersState: TrainersState = {
  trainers: [],
};

const usersReducer = (state: UsersState = initialUsersState, action: ActionTypes): UsersState => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...action.payload].splice(0, 8),
        usersCopy: action.payload,
      };
    default:
      return state;
  }
};

const trainersReducer = (state: TrainersState = initialTrainersState, action: ActionTypes): TrainersState => {
  switch (action.type) {
    case GET_TRAINERS:
      return {
        ...state,
        trainers: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers<RootState>({
  users: usersReducer, // Asigna la función reductora usersReducer como valor para la propiedad 'users' en el estado global
  trainers: trainersReducer,
});

export default rootReducer;
export type { RootState };
