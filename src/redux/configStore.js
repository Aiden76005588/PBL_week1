import { createStore, combineReducers, applyMiddleware } from "redux";
import memo from "./modules";
import thunk from "redux-thunk";

const middlewares = [thunk];

const rootReducer = combineReducers({ memo });
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
