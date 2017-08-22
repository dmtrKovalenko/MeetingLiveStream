import * as playerStatus from './PlayerStatuses';

export const notConnected = 'Отсутствует подключение к интернету';
export const notAccesible = 'Трансляция не доступна';
export const Active = 'Трансляция активна';
export const Loading = 'Подключение';

const messageMap = {
  [playerStatus.BUFFERING]: Loading,
  [playerStatus.ERROR]: Loading,
  [playerStatus.CONNECTIONOFF]: notConnected,
  [playerStatus.STOPPED]: notAccesible,
};

export default (status) => {
  const message = messageMap[status];
  // if nothing was found return active state
  return message || Active;
};
