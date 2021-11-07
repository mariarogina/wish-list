import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import { persistMiddleware } from "./middlewares";

const enhancer = applyMiddleware(ReduxThunk, logger, persistMiddleware);

const store = createStore(reducer, composeWithDevTools(enhancer));

export default store;
