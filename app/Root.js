import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StyleProvider, Container } from 'native-base';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import Routes, { navReducer } from './Routes';
import PlayerReducer from './reducers/Player';
import BroadcastingReducer from './reducers/Broadcasting';
import platform from '../native-base-theme/variables/platform';
import getTheme from '../native-base-theme/components';

const reducer = combineReducers({
  player: PlayerReducer,
  broadcasting: BroadcastingReducer,
  navigation: navReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Routes />
      </Container>
    </StyleProvider>
  </Provider>
);
