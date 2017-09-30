import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from '../styles';
import Hr from '../../../components/HR';
import getStatusMessage from '../../../constants/StatusMessage';
import DebouncedRenderer from '../../../components/DebouncedRenderer';
import { textColor } from '../../../config/androidColorPallete';
import * as playerStatus from '../../../constants/PlayerStatuses';

export default class StatusMessage extends DebouncedRenderer {
  static propTypes = {
    status: PropTypes.oneOf(Object.values(playerStatus)),
    connectionStatus: PropTypes.string,
    isAllowedToStream: PropTypes.bool,
  }

  shouldComponentUpdate = (nextProps, nextState) => (
    this.props.status !== nextProps.status ||
    this.props.connectionStatus !== nextProps.connectionStatus ||
    this.props.isAllowedToStream !== nextProps.isAllowedToStream ||
    this.state !== nextState
  )

  get updateImmediate() {
    const { status } = this.props;

    return status !== playerStatus.STOPPED;
  }

  render() {
    const { connectionStatus, isAllowedToStream } = this.props;
    const message = getStatusMessage(this.state.status, connectionStatus, isAllowedToStream);

    return (
      <View style={styles.lineContainer}>
        <Hr lineColor={textColor} text={message} />
      </View>
    );
  }
}
