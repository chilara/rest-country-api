import {
  GET_ALL_COUNTRIES_START_LOADING,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
  GET_ALL_COUNTRIES_STOP_LOADING,
} from "../types";

export const countryReducer = (
  state = { loading: false, country: [], error: null },
  action
) => {
  switch (action.types) {
    case GET_ALL_COUNTRIES_START_LOADING:
      return { ...state, loading: true };

    case GET_ALL_COUNTRIES_SUCCESS:
      console.log(action.payload);
      return { ...state, country: action.payload };
    case GET_ALL_COUNTRIES_FAIL:
      return { ...state, error: action.payload };
    case GET_ALL_COUNTRIES_STOP_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
