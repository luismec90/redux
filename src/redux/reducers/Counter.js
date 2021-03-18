import * as ActionTypes from '../action-types';

const initialState = {
  value: 0,
};

const Counter = (state = initialState, action) => {
  switch (action.type) {
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

export default Counter;
