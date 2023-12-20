import { createStore, applyMiddleware, compose, Store, combineReducers } from "redux";
import  { thunk, ThunkMiddleware } from "redux-thunk";
import rootReducer from "./reducers"; // Asegúrate de importar el rootReducer correctamente
import { RootState, RootAction } from "./types"; // Asegúrate de importar tus propios tipos

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhancer = composeEnhancer(applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>));

const store: Store<RootState, RootAction> = createStore(
  rootReducer,
  storeEnhancer
);

export default store;


