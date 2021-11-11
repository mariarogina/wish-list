import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import { persistMiddleware } from "./middlewares";

const enhancer = applyMiddleware(ReduxThunk, logger, persistMiddleware);
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// create our store

const store = createStore(
  reducer,
  loadFromLocalStorage(),
  composeWithDevTools(enhancer)
);

// listen for store changes
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
