import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StyleProvider, Container, Root } from 'native-base';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import App from './App';
import PlayerReducer from './reducers/Player';
import BroadcastingReducer from './reducers/Broadcasting';
import SettingsReducer from './reducers/Settings';
import platform from '../native-base-theme/variables/platform';
import getTheme from '../native-base-theme/components';

const reducer = combineReducers({
  player: PlayerReducer,
  broadcasting: BroadcastingReducer,
  settings: SettingsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Root>
          <App />
        </Root>
      </Container>
    </StyleProvider>
  </Provider>
);
