import { createStore, applyMiddleware, compose, Store, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import * as reducers from "./reducers"; // Importa todos tus reductores aquí

// Ahora, si 'reducers.ts' exporta 'RootState', puedes importarlo de la siguiente manera
import { RootState } from "./reducers"; // Asegúrate de que 'RootState' esté exportado correctamente en 'reducers.ts'

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(reducers); // Combina tus reductores aquí

const store: Store<RootState> = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk as ThunkMiddleware<RootState>))
);

export default store;

