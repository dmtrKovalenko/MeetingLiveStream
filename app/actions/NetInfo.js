import { NetInfo } from 'react-native';
import { createAction } from 'redux-actions';
import * as types from '../actionTypes';
import * as connectionStatus from '../constants/NetStatus';

const setConnectionState = createAction(types.CONNECTION_STATE_CHANGED);

const parseConnectionType = (type) => {
  // can be without breaks because of return
  switch (type) {
    case 'none':
      return connectionStatus.OFFLINE;
    case 'cellular':
      return connectionStatus.MOBILE;
    default:
      return connectionStatus.WIFI;
  }
};

export const onConnectionChange = ({ type }) => (dispatch) => {
  const connectionType = parseConnectionType(type);

  dispatch(setConnectionState(connectionType));
};

export const checkConnection = () => (dispatch) => {
  const callback = connectionInfo => dispatch(onConnectionChange(connectionInfo));

  NetInfo.getConnectionInfo().then(callback); // first time
  NetInfo.addEventListener('connectionChange', callback); // subscribe
};
