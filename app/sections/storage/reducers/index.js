import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import motorcicleReducer from "./motorcicleReducer";
import costsReducer from "./costsReducer";
import infoAppReducer from "./infoAppReducer";

export default combineReducers({
  profileReducer,
  motorcicleReducer,
  costsReducer,
  infoAppReducer,
});
