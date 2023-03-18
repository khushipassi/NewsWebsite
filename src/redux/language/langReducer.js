import { LANG_CHANGE } from "./langTypes";

const initialState = {
  language: "en",
};

const langReducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case LANG_CHANGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default langReducer;
