import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles.js';
import { Icon, Spinner } from 'native-base';
import { accentColor } from '../../../config/androidColorPallete.js';
import * as playerStatus from '../../../constants/PlayerStatuses.js';

const StatusIcon = ({ status }) => {
  if (status === playerStatus.BUFFERING || status === playerStatus.ERROR) {
    return <Spinner color={accentColor} />
  }

  if (status === playerStatus.STOPPED) {
    return <Icon name='ios-mic-off' style={styles.icon} />
  }

  if (status === playerStatus.CONNECTIONOFF) {
    return <MaterialIcon name="signal-wifi-off" style={styles.icon} />
  }

  return <Icon name='ios-radio-outline' style={styles.icon} />
};

export default StatusIcon;
