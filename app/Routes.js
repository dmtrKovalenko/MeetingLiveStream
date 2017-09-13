import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DrawerNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation';

import Header from './layouts/Header/Header';
import SideBar from './layouts/SideBar/SideBar';
import Settings from './routes/Settings/Settings';
import Broadcasting from './routes/Broadcasting/BroadcastingContainer';

const Routes = StackNavigator({
  Broadcasting: { screen: Broadcasting },
  Settings: { screen: Settings },
}, {
  navigationOptions: {
    title: 'Трансляция',
    header: Header,
  },
});

export const navReducer = (state, action) => {
  const newState = Routes.router.getStateForAction(action, state);
  return newState || state;
};

const AppWithNavigationState = props => (
  <Routes
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.shape(),
};

const stackROutes = connect(state => ({ nav: state.navigation }))(AppWithNavigationState);

export default DrawerNavigator({
  drawer: { screen: stackROutes },
}, {
  contentComponent: SideBar,
});
