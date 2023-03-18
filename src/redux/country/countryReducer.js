import { COUNTRY_CHANGE } from "./countryTypes";

const initialState = {
  country: "in",
};

const countryReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case COUNTRY_CHANGE:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
