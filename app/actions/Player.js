import { NetInfo } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

import * as types from '../actionTypes';
import * as statuses from '../constants/PlayerStatuses';
import { displayStatusNotification } from '../utils/NotificationsManager';

let timer;
let callback;
const autoReconnect = () => {
  if (!timer) {
    timer = BackgroundTimer.setInterval(callback, 5000);
  }
};

const clearAutoReconnect = () => {
  BackgroundTimer.clearInterval(timer);
  timer = null;
};

export const statusChanged = (status) => {
  displayStatusNotification(status);

  if (statuses.ERROR_STATUSES.includes(status)) {
    autoReconnect();
  } else if (statuses.PLAYING_STATUSES.includes(status)) {
    clearAutoReconnect();
  }

  return ({
    type: types.PLAYER_STATUS_CHANGED,
    payload: status,
  });
};

export const checkConnection = () => (dispatch) => {
  NetInfo.isConnected.fetch().then((isConnected) => {
    const status = !isConnected
      ? statuses.CONNECTIONOFF
      : statuses.STOPPED;

    dispatch(statusChanged(status));
  });
};

export const changeStatus = (status, autoReconnectCallback) => (dispatch) => {
  callback = autoReconnectCallback;

  if (status === statuses.STOPPED) {
    dispatch(statusChanged(statuses.BUFFERING));
    return dispatch(checkConnection());
  }

  dispatch(statusChanged(status));
};
