import * as ActionTypes from '../action-types';

const initialState = {
  value: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_COUNTER:
      return {
        ...state,
        value: parseInt(localStorage.getItem('counter') ?? 0),
      };
    case ActionTypes.INCREASE_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    case ActionTypes.DECREASE_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counter;
