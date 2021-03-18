import * as ActionTypes from '../action-types';

export const increaseCounter = (payload) => ({
  type: ActionTypes.INCREASE_COUNTER,
  payload,
});

export const decreaseCounter = (payload) => ({
  type: ActionTypes.DECREASE_COUNTER,
  payload,
});
