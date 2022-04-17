import { combineReducers } from "redux";
import { userReducer } from "./Users";
import contactReducer from "./Contact";
export const rootReducer = combineReducers({
  userReducer,
  contactReducer,
});
