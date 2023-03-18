import { combineReducers } from "redux";
import fetchReducer from "./fetch/fetchReducer";
import countryReducer from "./country/countryReducer";
import cartReducer from "./cart/cartReducer";
import langReducer from "./language/langReducer";
import sourceReducer from "./source/sourceReducer";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  country: countryReducer,
  cart: cartReducer,
  language: langReducer,
  source: sourceReducer,
});

export default rootReducer;
