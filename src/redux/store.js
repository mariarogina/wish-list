import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const enhancer = applyMiddleware(ReduxThunk, logger);

const store = createStore(reducer, composeWithDevTools(enhancer));

export default store;
