import {
  ITEM_ADD,
ITEM_DEL,
ITEM_EDIT
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
export function ItemEdit(state) {
  return {
    type: ITEM_EDIT,
    payload: state,
  };
}

