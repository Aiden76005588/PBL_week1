import { createStore, combineReducers } from "redux";
import memo from "./modules";

const rootReducer = combineReducers({ memo });

const store = createStore(rootReducer);

export default store;
