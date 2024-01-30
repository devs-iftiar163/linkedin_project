import { combineReducers } from "redux";
import linkedReducer from "./linkedin/linkedinReducer";

// Root Reducer
const rootReducer = combineReducers({
  linkedin: linkedReducer,
});

// export default
export default rootReducer;
