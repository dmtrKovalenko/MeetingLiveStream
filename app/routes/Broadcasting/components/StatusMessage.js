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
    const message = getStatusMessage(this.state.status);

    return (
      <View style={styles.lineContainer}>
        <Hr
          lineColor={textColor}
          text={message}
        />
      </View>
    );
  }
}
