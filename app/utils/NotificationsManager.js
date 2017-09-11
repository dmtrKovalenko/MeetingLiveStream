import PushNotification from 'react-native-push-notification';
import getStatusMessage from '../constants/StatusMessage';
import { STOPPED, PLAYING, PAUSED } from '../constants/PlayerStatuses';
import { meetingName } from '../config/project.config';

const statusNotificationId = '1234';

export const cancelAllNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};

export const displayStatusNotification = (status) => {
  if (status === STOPPED) {
    // cancel all because there is a trouble in react-native-push-notification
    // with cancelling particular notification on Android
    return cancelAllNotifications();
  }

  PushNotification.localNotification({
    id: statusNotificationId,
    autoCancel: false,
    vibrate: false,
    ongoing: status === PLAYING || status === PAUSED,
    title: getStatusMessage(status),
    message: meetingName,
    playSound: false,
  });
};
