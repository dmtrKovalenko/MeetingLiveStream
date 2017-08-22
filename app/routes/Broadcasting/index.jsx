import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { H1 } from 'native-base';
import { View, Text } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

import Hr from '../../components/HR';
import styles from './styles';
import * as playerStatus from '../../constants/PlayerStatuses';
import { meetingName } from '../../config/project.config';
import { formatSS } from '../../utils/TimeHelper';
import { textColor } from '../../config/androidColorPallete';

import StatusIcon from './components/StatusIcon';
import GetStatusMessage from '../../constants/StatusMessage';
import NetworkControls from './components/NetworkControls/NetworkControls';

class Broadcasting extends Component {
  static propTypes = {
    status: PropTypes.string,
  }

  state = {
    currentTime: 0,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.status !== nextProps.status) {
      const { status } = nextProps;

      if (status === playerStatus.CONNECTIONOFF || status === playerStatus.STOPPED) {
        this.setState({ currentTime: 0 });
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.status !== nextProps.status ||
      this.state !== nextState
    );
  }

  componentDidUpdate(prevProps) {
    // only if status changed
    if (this.props.status !== prevProps.status) {
      // on playing start - start timer
      if (this.props.status === playerStatus.PLAYING) {
        this.timer = BackgroundTimer.setInterval(this.updateTimerState, 1000);
      } else {
        // if paused or error throw stop
        BackgroundTimer.clearInterval(this.timer);
      }
    }
  }

  updateTimerState = () => {
    this.setState({ currentTime: this.state.currentTime + 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <StatusIcon status={this.props.status} />
        </View>

        <View style={styles.titleContainer}>
          <H1 style={styles.title}>
            {meetingName}
          </H1>

          <View style={styles.lineContainer}>
            <Hr lineColor={textColor} text={GetStatusMessage(this.props.status)} />
          </View>
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.timeCounter}>
            {formatSS(this.state.currentTime)}
          </Text>
        </View>

        <NetworkControls currentTime={this.state.currentTime} />
      </View>
    );
  }
}

export default Broadcasting;
