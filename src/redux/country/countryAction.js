import { COUNTRY_CHANGE } from "./countryTypes";

export const countryChange = (country) => {
  console.log("action", country);
  return {
    type: COUNTRY_CHANGE,
    payload: country,
  };
};
