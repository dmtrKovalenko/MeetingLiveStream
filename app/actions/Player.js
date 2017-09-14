import { NetInfo } from 'react-native';

import timer from './Timer';
import * as types from '../actionTypes';
import * as statuses from '../constants/PlayerStatuses';
import { displayStatusNotification } from '../utils/NotificationsManager';

export const statusChanged = (status) => {
  displayStatusNotification(status);

  return ({
    type: types.PLAYER_STATUS_CHANGED,
    payload: status,
  });
};

export const checkConnection = () => (dispatch) => {
  dispatch(statusChanged(statuses.BUFFERING)); // display loading state

  NetInfo.isConnected.fetch().then((isConnected) => {
    const status = !isConnected
      ? statuses.CONNECTIONOFF
      : statuses.STOPPED;

    dispatch(statusChanged(status));
  });
};

export const changeStatus = status => (dispatch, getState) => {
  const previosStatus = getState().player.status;

  if (status !== previosStatus) {
    dispatch(timer(status));

    status === statuses.STOPPED
      ? dispatch(checkConnection())
      : dispatch(statusChanged(status));
  }
};
