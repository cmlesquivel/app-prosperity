import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import motorcicleReducer from "./motorcicleReducer";
import costsReducer from "./costsReducer";

export default combineReducers({
  profileReducer,
  motorcicleReducer,
  costsReducer,
});
