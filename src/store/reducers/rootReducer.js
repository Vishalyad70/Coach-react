import { combineReducers } from "redux";
import authReducer, { loaderReducer, formReducer } from "./authReducer";
import userReducer, { dashboardReducer } from "./userReducer";
import coachReducer from "./coachReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  coach: coachReducer,
  loader: loaderReducer,
  form: formReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
