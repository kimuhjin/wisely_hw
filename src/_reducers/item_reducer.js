import {
  ITEM_ADD,
  ITEM_DEL,
  ITEM_EDIT
} from "../_actions/types";
const initialState = [];
export default function (state = initialState, action) {
  switch (action.type) {
    case ITEM_ADD:{
      const result = state.concat(action.payload)
      return result
    }

    case  ITEM_DEL:
      return action.payload
      
    case  ITEM_EDIT:
      return action.payload
    
      default:
      return state;
  }
}