import { combineReducers, compose, createStore } from "redux";
import { loginReducer } from "./loginReducer";

let reducers = combineReducers({
  login: loginReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;
