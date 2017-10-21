import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Spinner } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles';
import DebouncedRenderer from '../../../components/DebouncedRenderer';
import { accentColor } from '../../../config/androidColorPallete';
import * as playerStatus from '../../../constants/PlayerStatuses';

export default class StatusIcon extends DebouncedRenderer {
  static propTypes = {
    isAllowedToStream: PropTypes.bool.isRequired,
    status: PropTypes.oneOf(Object.values(playerStatus)),
  }

  shouldComponentUpdate = (nextProps, nextState) => (
    this.props.status !== nextProps.status ||
    this.state !== nextState
  )

  get updateImmediate() {
    const { status } = this.props;

    return status !== playerStatus.STOPPED;
  }

  render() {
    const { status } = this.state;

    if (!this.props.isAllowedToStream) {
      return <MaterialIcon name="signal-cellular-connected-no-internet-4-bar" style={styles.icon} />;
    }

    if (!status || status === playerStatus.BUFFERING || status === playerStatus.ERROR) {
      return <Spinner color={accentColor} />;
    }
    if (status === playerStatus.STOPPED) {
      return <Icon name="ios-mic-off" style={styles.icon} />;
    }
    if (status === playerStatus.CONNECTIONOFF) {
      return <MaterialIcon name="" style={styles.icon} />;
    }

    return <Icon name="ios-radio-outline" style={styles.icon} />;
  }
}
