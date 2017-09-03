import PushNotification from 'react-native-push-notification';
import getStatusMessage from '../constants/StatusMessage';
import { STOPPED } from '../constants/PlayerStatuses';
import { meetingName } from '../config/project.config';

export const cancelAllNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};

export const displayStatusNotification = (status) => {
  cancelAllNotifications();

  if (status !== STOPPED) {
    PushNotification.localNotification({
      autoCancel: false,
      vibrate: false,
      ongoing: true,
      title: getStatusMessage(status),
      message: meetingName,
      playSound: false,
    });
  }
};
