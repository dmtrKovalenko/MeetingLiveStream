import { createAction } from 'redux-actions';
import { NetInfo } from 'react-native';

import debounce from 'debounce';
import * as types from '../actionTypes';
import * as statuses from '../constants/PlayerStatuses';

import { displayStatusNotification } from '../utils/NotificationsManager'

export const statusChanged = createAction(types.PLAYER_STATUS_CHANGED);

export const checkConnection = () => (dispatch) => {
  NetInfo.isConnected.fetch().then((isConnected) => {
    const status = !isConnected
      ? statuses.CONNECTIONOFF
      : statuses.STOPPED;

    dispatch(statusChanged(status));
  });
};

const statusNotification = debounce(displayStatusNotification, 300);

export const changeStatus = status => (dispatch) => {
  if (status === statuses.STOPPED) {
    dispatch(statusChanged(statuses.BUFFERING));
    return dispatch(checkConnection());
  }

  dispatch(statusChanged(status));
  statusNotification(status);
};

