import * as actionsTypes from "../actions/actionsTypes";

const counterReducer = (state = 10, action) => {
  let newState;
  switch (action.type) {
    case actionsTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionsTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionsTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default counterReducer;
