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
const autoReconnect = (callback) => {
  if (!timer) {
    timer = BackgroundTimer.setInterval(callback, 5000);
  }
};

const clearAutoReconnect = () => {
  BackgroundTimer.clearInterval(timer);
  timer = null;
};

export default (status, callback) => {
  if (toAutoRecconectStatuses.includes(status)) {
    autoReconnect(callback);
  } else if (toClearStatuses.includes(status)) {
    clearAutoReconnect();
  }
};
