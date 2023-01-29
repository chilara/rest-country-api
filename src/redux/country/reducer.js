import * as types from "../types";

export const countryReducer = (state = { loading: false }, action) => {
  switch (action.types) {
    case types.GET_ALL_COUNTRIES:
      return { ...state, loading: true };
    case types.GET_ALL_COUNTRIES_SUCCESS:
      return { ...state, loading: false, country: action.payload };
    case types.GET_ALL_COUNTRIES_FAIL:
      return { ...state, loading: false, error: action.message };

    default:
      return state;
  }
};
