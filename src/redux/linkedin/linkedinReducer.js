import {
  LINKEDIN_CREATE_FULLFILLED,
  LINKEDIN_CREATE_PENDING,
  LINKEDIN_CREATE_REJECTED,
  LINKEDIN_DELETE_FULLFILLED,
  LINKEDIN_DELETE_PENDING,
  LINKEDIN_DELETE_REJECTED,
  LINKEDIN_POST_FULLFILLED,
  LINKEDIN_POST_PENDING,
  LINKEDIN_POST_REJECTED,
  LINKEDIN_UPDATE_FULLFILLED,
  LINKEDIN_UPDATE_PENDING,
  LINKEDIN_UPDATE_REJECTED,
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

    case LINKEDIN_DELETE_PENDING:
      return {
        ...state,
        loading: true,
        error: "Data Creation Processing",
      };

    case LINKEDIN_DELETE_FULLFILLED:
      return {
        ...state,
        loading: false,
        linkedin: state.linkedin.filter((data) => data.id !== action.payload),
        message: "Data Deleted",
      };

    case LINKEDIN_DELETE_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Data Delete Failed",
      };

    case LINKEDIN_UPDATE_PENDING:
      return {
        ...state,
        loading: true,
        error: "Data Update Processing",
      };

    case LINKEDIN_UPDATE_FULLFILLED:
      return {
        ...state,
        loading: false,
        linkedin: state.linkedin.map((item) => {
          if (item.id == action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
        message: "Data Update Processing",
      };

    case LINKEDIN_UPDATE_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Data Update Failed",
      };
    default:
      return state;
  }
};

// Export Default
export default linkedReducer;
