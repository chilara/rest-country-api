import * as types from "../types";
import axios from "axios";

const base = "https://restcountries.com/v2/all";

export const getCountries = async (dispatch) => {
  try {
    dispatch({
      type: types.GET_ALL_COUNTRIES,
    });

    const response = await axios.get(`${base}/all`);
    if (response.data.length > 0) {
      dispatch({
        type: types.GET_ALL_COUNTRIES,
        payload: response.data,
      });
    }
  } catch (error) {
    const message = error.message
      ? error.response.data.message
      : "something went wrong";
    dispatch({
      type: types.GET_ALL_COUNTRIES_FAIL,
      payload: message,
    });
  }
};
