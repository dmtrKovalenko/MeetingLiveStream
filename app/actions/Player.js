import { createAction } from 'redux-actions';

import timer from './Timer';
import * as types from '../actionTypes';
import { displayStatusNotification } from '../utils/NotificationsManager';

export const statusChanged = createAction(types.PLAYER_STATUS_CHANGED);

export const changeStatus = status => (dispatch, getState) => {
  const { player, settings } = getState();
  const previousStatus = player.status;

  if (status !== previousStatus) {
    dispatch(timer(status));

    if (settings.showNotifications) {
      displayStatusNotification(status);
    }

    dispatch(statusChanged(status));
  }
};
