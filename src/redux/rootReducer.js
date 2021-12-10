import { combineReducers } from "redux";
import usersReducer from "./user/usersReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
});

export default rootReducer;
