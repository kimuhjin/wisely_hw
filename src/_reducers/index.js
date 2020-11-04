import { combineReducers } from "redux";
import item from "./item_reducer";

const rootReducer = combineReducers({
  item,
});

export default rootReducer;
