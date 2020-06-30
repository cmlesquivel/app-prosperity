import { createStore, applyMiddleware } from "redux";
import myReducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(myReducers, applyMiddleware(thunk));

export default store;
