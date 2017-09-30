import * as playerStatus from './PlayerStatuses';
import * as networkStatuses from './NetStatus';

export const notConnected = 'Отсутствует подключение к интернету';
export const mobileConnection = 'Подключено через мобильный интернет';
export const notAccessible = 'Трансляция не доступна';
export const active = 'Трансляция активна';
export const loading = 'Подключение';

const messageMap = {
  [playerStatus.PLAYING]: active,
  [playerStatus.PAUSED]: active,
  [playerStatus.CONNECTIONOFF]: notConnected,
  [playerStatus.STOPPED]: notAccessible,
};

export default (status, netStatus, isAllowed) => {
  if (netStatus) { // if network status was set
    if (netStatus === networkStatuses.OFFLINE) {
      return notConnected;
    }
    if (!isAllowed) {
      return mobileConnection;
    }
  }

  const message = messageMap[status];
  // if nothing was found return loading state
  return message || loading;
};
