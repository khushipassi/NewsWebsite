import { SOURCE_CHANGE } from "./sourceTypes";

export const sourceChange = (source) => {
  return {
    type: SOURCE_CHANGE,
    payload: source,
  };
};
