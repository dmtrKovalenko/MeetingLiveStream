import { NetInfo } from 'react-native';
import { createAction } from 'redux-actions';

import timer from './Timer';
import * as types from '../actionTypes';
import * as statuses from '../constants/PlayerStatuses';
import { displayStatusNotification } from '../utils/NotificationsManager';

const statusChange = createAction(types.PLAYER_STATUS_CHANGED);

export const statusChanged = status => (dispatch, getState) => {
  const { showNotifications } = getState().settings;
  if (showNotifications) {
    displayStatusNotification(status);
  }

  dispatch(statusChange(status));
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
