import * as ActionTypes from '../action-types';

export const notification = (payload) => ({
  type: ActionTypes.SHOW_NOTIFICATION,
  payload,
});
