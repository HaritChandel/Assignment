import { combineReducers } from "redux";
import { eventReducer } from "./EventReducer";

const reducers = combineReducers({
  allEvents: eventReducer,
});
export default reducers;
