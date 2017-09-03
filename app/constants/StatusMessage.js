import * as playerStatus from './PlayerStatuses';

export const notConnected = 'Отсутствует подключение к интернету';
export const notAccessible = 'Трансляция не доступна';
export const active = 'Трансляция активна';
export const loading = 'Подключение';

const messageMap = {
  [playerStatus.BUFFERING]: loading,
  [playerStatus.ERROR]: loading,
  [playerStatus.CONNECTIONOFF]: notConnected,
  [playerStatus.STOPPED]: notAccessible,
};

export default (status) => {
  const message = messageMap[status];
  // if nothing was found return active state
  return message || active;
};
