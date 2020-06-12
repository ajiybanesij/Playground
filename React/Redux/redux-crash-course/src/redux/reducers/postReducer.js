import * as types from "../actions/types";

const initialState = {
  items: [],
  item: {},
  companies: [],
  result: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FECTH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case types.GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case types.SET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case types.NEW_POSTS:
      break;
    default:
      return state;
  }
}
