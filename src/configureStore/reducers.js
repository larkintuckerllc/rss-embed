import { combineReducers } from 'redux';
import appBlocking from '../ducks/appBlocking';
import itemIndex from '../ducks/itemIndex';
import items from '../ducks/items';

export default combineReducers({
  appBlocking,
  itemIndex,
  items,
});
