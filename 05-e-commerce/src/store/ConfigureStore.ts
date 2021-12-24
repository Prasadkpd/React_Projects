import { Store, createStore, applyMiddleware } from "redux";

// import createSagaMiddleware from "redux-saga";

import thunk from "redux-thunk";

import { routerMiddleware } from "connected-react-router";

import { History } from "history";

import { ApplicationState, createRootReducer } from "./Store";

export default function configureStore(
    history: History,
    initialState: any
): Store<ApplicationState> {
  const store = createStore(
      createRootReducer(history),
      initialState,
      applyMiddleware(routerMiddleware(history), thunk)
  );
  return store;
}
