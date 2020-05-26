import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "./shop.action";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errMsg: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, errMsg: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default shopReducer;
