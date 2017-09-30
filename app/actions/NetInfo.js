import { NetInfo } from 'react-native';
import { createAction } from 'redux-actions';
import * as types from '../actionTypes';
import * as connectionStatus from '../constants/NetStatus';

const setConnectionState = createAction(types.CONNECTION_STATE_CHANGED);

export const onConnectionChange = isConnected => (dispatch) => {
  if (!isConnected) {
    return dispatch(setConnectionState(connectionStatus.OFFLINE));
  }

  NetInfo.getConnectionInfo()
    .then(({ type }) => {
      console.log(type);
      const status = type === 'cellular'
        ? connectionStatus.MOBILE
        : connectionStatus.WIFI;

      dispatch(setConnectionState(status));
    });
};

export const checkConnection = () => (dispatch) => {
  const callback = isConnected => dispatch(onConnectionChange(isConnected));

  NetInfo.isConnected.fetch().then(callback); // first time
  NetInfo.isConnected.addEventListener('change', callback); // subscribe
};
