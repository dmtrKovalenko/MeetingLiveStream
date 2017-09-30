import BackgroundTimer from 'react-native-background-timer';
import * as playerStatus from '../constants/PlayerStatuses';

export const toAutoRecconectStatuses = [
  playerStatus.ERROR,
  playerStatus.STOPPED,
];

export const toClearStatuses = [
  playerStatus.PLAYING,
  playerStatus.PAUSED,
];

let timer;
const autoReconnect = (callback, timeout) => {
  if (!timer) {
    timer = BackgroundTimer.setInterval(callback, timeout * 1000);
  }
};

const clearAutoReconnect = () => {
  BackgroundTimer.clearInterval(timer);
  timer = null;
};

export default (status, callback, timeout) => {
  if (toAutoRecconectStatuses.includes(status)) {
    autoReconnect(callback, timeout);
  } else if (toClearStatuses.includes(status)) {
    clearAutoReconnect();
  }
};
