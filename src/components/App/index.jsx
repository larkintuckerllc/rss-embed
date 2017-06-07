import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as fromAppBlocking from '../../ducks/appBlocking';
import * as fromItemIndex from '../../ducks/itemIndex';
import * as fromItems from '../../ducks/items';

const POLLING = 30 * 1000;
const CYCLING = 5 * 1000;
class App extends Component {
  constructor(props) {
    super(props);
    this.cycle = this.cycle.bind(this);
    this.fetch = this.fetch.bind(this);
    this.cyclingInterval = null;
  }
  componentDidMount() {
    this.fetch();
    setInterval(() => {
      this.fetch();
    }, POLLING);
  }
  cycle() {
    const { itemIndex, items, setItemIndex } = this.props;
    if (items.length === 0) return;
    setItemIndex(itemIndex < items.length - 1 ? itemIndex + 1 : 0);
  }
  fetch() {
    const { fetchItems, setAppBlocking, setItemIndex } = this.props;
    if (this.cyclingInterval !== null) {
      clearInterval(this.cyclingInterval);
      this.cyclingInterval = null;
    }
    setAppBlocking(true);
    setItemIndex(0);
    return fetchItems()
      .then(
        () => {
          setAppBlocking(false);
          this.cyclingInterval = setInterval(this.cycle, CYCLING);
        },
        (error) => {
          if (process.env.NODE_ENV !== 'production'
            && error.name !== 'ServerException') {
            window.console.log(error);
          }
          setAppBlocking(false);
        },
      );
  }
  render() {
    const { appBlocking, fetchItemsErrorMessage, itemIndex, items } = this.props;
    if (appBlocking) return <div>Loading</div>;
    if (fetchItemsErrorMessage !== null) return <div>Error</div>;
    if (items.length === 0) return <div>Empty</div>;
    return (
      <div>{items[itemIndex].description}</div>
    );
  }
}
App.propTypes = {
  appBlocking: PropTypes.bool.isRequired,
  fetchItems: PropTypes.func.isRequired,
  fetchItemsErrorMessage: PropTypes.string,
  itemIndex: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAppBlocking: PropTypes.func.isRequired,
  setItemIndex: PropTypes.func.isRequired,
};
App.defaultProps = {
  fetchItemsErrorMessage: null,
};
export default connect(
  state => ({
    appBlocking: fromAppBlocking.getAppBlocking(state),
    fetchItemsErrorMessage: fromItems.getFetchItemsErrorMessage(state),
    itemIndex: fromItemIndex.getItemIndex(state),
    items: fromItems.getItems(state),
  }), {
    fetchItems: fromItems.fetchItems,
    setAppBlocking: fromAppBlocking.setAppBlocking,
    setItemIndex: fromItemIndex.setItemIndex,
  },
)(App);
