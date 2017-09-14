import { createAction } from 'redux-actions';
import BackgroundTimer from 'react-native-background-timer';

import * as types from '../actionTypes';
import * as playerStatus from '../constants/PlayerStatuses';

let timer;

const timeChanged = createAction(types.CURRENT_TIME_CHANGED);
const resetTime = createAction(types.CURRENT_TIME_RESET);

export default status => (dispatch) => {
  // on playing start - start timer
  if (status === playerStatus.PLAYING) {
    if (!timer) {
      timer = BackgroundTimer.setInterval(() => dispatch(timeChanged()), 1000);
    }
  } else {
    if (status === playerStatus.STOPPED) {
      dispatch(resetTime());
    }

    // if paused or error throw stop
    BackgroundTimer.clearInterval(timer);
    timer = null;
  }
};
