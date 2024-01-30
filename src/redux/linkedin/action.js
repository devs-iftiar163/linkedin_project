import axios from "axios";
import {
  LINKEDIN_CREATE_FULLFILLED,
  LINKEDIN_CREATE_PENDING,
  LINKEDIN_CREATE_REJECTED,
  LINKEDIN_POST_FULLFILLED,
  LINKEDIN_POST_REJECTED,
} from "./actionTypes";

// Get Data
export const getLinkedinPost = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5050/linkedin");
    dispatch({ type: LINKEDIN_POST_FULLFILLED, payload: response.data });
  } catch (error) {
    dispatch({ type: LINKEDIN_POST_REJECTED });
  }
};

// Data Create
export const createPostData = (data) => async (dispatch) => {
  try {
    dispatch({ type: LINKEDIN_CREATE_PENDING });
    await axios.post("http://localhost:5050/linkedin", data);
    dispatch({ type: LINKEDIN_CREATE_FULLFILLED, payload: data });
  } catch (error) {
    dispatch({ type: LINKEDIN_CREATE_REJECTED });
  }
};
