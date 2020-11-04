import {
  ITEM_ADD,
ITEM_DEL
} from "./types";

export function ItemAdd(state) {
  
  return {
    type: ITEM_ADD,
    payload: state,
  };
}
export function ItemDel(state) {
  return {
    type: ITEM_DEL,
    payload: state,
  };
}

