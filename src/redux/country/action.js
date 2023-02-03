import {
  GET_ALL_COUNTRIES_START_LOADING,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
  GET_ALL_COUNTRIES_STOP_LOADING,
} from "../types";

import axios from "axios";

const base = "https://restcountries.com/v2/all";

export const getCountries = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_COUNTRIES_START_LOADING,
    });

    const response = await axios.get(`${base}`);
    console.log(response);
    dispatch({
      type: GET_ALL_COUNTRIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const message = error.message
      ? error.response.data.message
      : "something went wrong";
    dispatch({
      type: GET_ALL_COUNTRIES_FAIL,
      payload: message,
    });
  } finally {
    dispatch({
      type: GET_ALL_COUNTRIES_STOP_LOADING,
    });
  }
};
