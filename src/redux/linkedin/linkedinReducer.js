import {
  LINKEDIN_CREATE_FULLFILLED,
  LINKEDIN_CREATE_PENDING,
  LINKEDIN_CREATE_REJECTED,
  LINKEDIN_POST_FULLFILLED,
  LINKEDIN_POST_PENDING,
  LINKEDIN_POST_REJECTED,
} from "./actionTypes";
import { initValue } from "./initValue";

// Create Post Reducer
const linkedReducer = (state = initValue, action) => {
  switch (action.type) {
    case LINKEDIN_POST_PENDING:
      return {
        ...state,
        loading: true,
      };

    case LINKEDIN_POST_FULLFILLED:
      return {
        ...state,
        loading: false,
        linkedin: action.payload,
      };

    case LINKEDIN_POST_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Data Connection Failed",
      };

    case LINKEDIN_CREATE_PENDING:
      return {
        ...state,
        loading: true,
      };

    case LINKEDIN_CREATE_FULLFILLED:
      return {
        ...state,
        loading: false,
        linkedin: [...state.linkedin, action.payload],
        message: "Data Creation Successfull",
      };

    case LINKEDIN_CREATE_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Data Creation Failed",
      };
    default:
      return state;
  }
};

// Export Default
export default linkedReducer;
