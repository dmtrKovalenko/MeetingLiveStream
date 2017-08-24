import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Spinner } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles';
import { accentColor } from '../../../config/androidColorPallete';
import * as playerStatus from '../../../constants/PlayerStatuses';

const StatusIcon = ({ status }) => {
  if (status === playerStatus.BUFFERING || status === playerStatus.ERROR) {
    return <Spinner color={accentColor} />;
  }

  if (status === playerStatus.STOPPED) {
    return <Icon name="ios-mic-off" style={styles.icon} />;
  }

  if (status === playerStatus.CONNECTIONOFF) {
    return <MaterialIcon name="signal-wifi-off" style={styles.icon} />;
  }

  return <Icon name="ios-radio-outline" style={styles.icon} />;
};

StatusIcon.propTypes = {
  status: PropTypes.string,
};

export default StatusIcon;
