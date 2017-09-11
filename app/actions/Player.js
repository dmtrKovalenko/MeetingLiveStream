import debounce from 'debounce';
import { createAction } from 'redux-actions';
import { NetInfo } from 'react-native';

import * as types from '../actionTypes';
import * as statuses from '../constants/PlayerStatuses';
import { displayStatusNotification } from '../utils/NotificationsManager';

const statusNotification = debounce(displayStatusNotification, 300);
export const statusChanged = (status) => {
  displayStatusNotification(status);
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

export const changeStatus = status => (dispatch) => {
  if (status === statuses.STOPPED) {
    dispatch(statusChanged(statuses.BUFFERING));
    return dispatch(checkConnection());
  }

  dispatch(statusChanged(status));
};
