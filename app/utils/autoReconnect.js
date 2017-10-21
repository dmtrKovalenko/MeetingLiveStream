import BackgroundTimer from 'react-native-background-timer';
import * as playerStatus from '../constants/PlayerStatuses';

export const toAutoReconnectStatuses = [
  playerStatus.ERROR,
  playerStatus.STOPPED,
];

export const toClearStatuses = [
  playerStatus.PLAYING,
  playerStatus.PAUSED,
];

let timer;
let dismissTimer;

const clearAutoReconnect = () => {
  BackgroundTimer.clearInterval(timer);
  BackgroundTimer.clearTimeout(dismissTimer);

  timer = null;
};

const autoReconnect = (callback, timeout) => {
  if (!timer) {
    timer = BackgroundTimer.setInterval(callback, timeout * 1000);
    // cancel after 20 minutes
    dismissTimer = BackgroundTimer.setTimeout(clearAutoReconnect, 20 * 1000);
  }
};

export default (status, callback, timeout) => {
  if (toAutoReconnectStatuses.includes(status)) {
    autoReconnect(callback, timeout);
  } else if (toClearStatuses.includes(status)) {
    clearAutoReconnect();
  }
};
