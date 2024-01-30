import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

// Api Middleware
const middleware = [thunk];

// Create Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Export Default
export default store;
