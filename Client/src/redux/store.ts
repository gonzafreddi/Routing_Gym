import { createStore, applyMiddleware, compose, Store } from "redux";
import  { thunk, ThunkMiddleware } from "redux-thunk";
import rootReducer, { RootState } from "./reducers";

// Tipos de acción si los tienes definidos
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Se especifica el tipo del store
const store: Store<RootState> = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk as ThunkMiddleware<RootState>))
);

export default store;

