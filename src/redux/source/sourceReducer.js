import { SOURCE_CHANGE } from "./sourceTypes";

const initialState = {
  source: "",
};

const sourceReducer = (state = initialState, action) => {
  console.log("source sction", action);
  switch (action.type) {
    case SOURCE_CHANGE:
      return {
        ...state,
        source: action.payload,
      };
    default:
      return state;
  }
};

export default sourceReducer;
