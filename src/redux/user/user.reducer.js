import { SET_CURRENT_USER } from "./user.action";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.payload });
    default:
      return state;
  }
};

export default userReducer;
