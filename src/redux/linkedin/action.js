import axios from "axios";
import {
  LINKEDIN_CREATE_FULLFILLED,
  LINKEDIN_CREATE_PENDING,
  LINKEDIN_CREATE_REJECTED,
  LINKEDIN_DELETE_FULLFILLED,
  LINKEDIN_DELETE_PENDING,
  LINKEDIN_DELETE_REJECTED,
  LINKEDIN_POST_FULLFILLED,
  LINKEDIN_POST_REJECTED,
  LINKEDIN_UPDATE_FULLFILLED,
  LINKEDIN_UPDATE_PENDING,
  LINKEDIN_UPDATE_REJECTED,
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

// Update Data
export const updatePostData =
  ({ id, data }) =>
  async (dispatch) => {
    try {
      dispatch({ type: LINKEDIN_UPDATE_PENDING });

      await axios.patch(`http://localhost:5050/linkedin/${id}`, data);

      dispatch({
        type: LINKEDIN_UPDATE_FULLFILLED,
        payload: { id: id, ...data },
      });
    } catch (error) {
      dispatch({ type: LINKEDIN_UPDATE_REJECTED });
    }
  };

// Delete Data
export const deleteLinkedPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: LINKEDIN_DELETE_PENDING });
    await axios.delete(`http://localhost:5050/linkedin/${id}`);
    dispatch({ type: LINKEDIN_DELETE_FULLFILLED, payload: id });
  } catch (error) {
    dispatch({ type: LINKEDIN_DELETE_REJECTED });
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
