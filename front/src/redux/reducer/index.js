import { combineReducers } from "redux";

import image from "./imageReducer";
import comment from "./commentReducer";

export default combineReducers({
  image,
  comment
})