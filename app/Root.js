import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import Layout from './layouts/CoreLayout';
import Broadcasting from './routes/Broadcasting/BroadcastingContainer';
import PlayerReducer from './reducers/Player';
import BroadcastingReducer from './reducers/Broadcasting';

const reducer = combineReducers({
  player: PlayerReducer,
  broadcasting: BroadcastingReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <Layout>
      <Broadcasting />
    </Layout>
  </Provider>
);
