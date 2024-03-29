export const TOGGLE_CART_DROPDOWN = "TOGGLE_CART_DROPDOWN";
export const ADD_ITEM = "ADD_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: DECREASE_ITEM,
  payload: item,
});
