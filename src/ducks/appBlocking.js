import { ACTION_PREFIX } from '../strings';

// API
// ACTIONS
export const SET_APP_BLOCKING = `${ACTION_PREFIX}SET_APP_BLOCKING`;
// SCHEMA
// REDUCERS
export default (state = true, action) => {
  switch (action.type) {
    case SET_APP_BLOCKING:
      return action.value;
    default:
      return state;
  }
};
// ACCESSORS AKA SELECTORS
export const getAppBlocking = state => state.appBlocking;
// ACTION CREATORS
export const setAppBlocking = value => ({
  type: SET_APP_BLOCKING,
  value,
});
