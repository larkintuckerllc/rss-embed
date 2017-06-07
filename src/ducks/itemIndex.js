import { ACTION_PREFIX } from '../strings';

// API
// ACTIONS
export const SET_ITEM_INDEX = `${ACTION_PREFIX}SET_ITEM_INDEX`;
// SCHEMA
// REDUCERS
export default (state = 0, action) => {
  switch (action.type) {
    case SET_ITEM_INDEX:
      return action.value;
    default:
      return state;
  }
};
// ACCESSORS AKA SELECTORS
export const getItemIndex = state => state.itemIndex;
// ACTION CREATORS
export const setItemIndex = value => ({
  type: SET_ITEM_INDEX,
  value,
});
