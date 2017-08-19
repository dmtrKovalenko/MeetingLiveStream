import * as playerStatus from '../../constants/PlayerStatuses.js';
import React, { Component } from 'react';
import { formatSS } from '../../utils/TimeHelper';
import { textColor } from '../../config/androidColorPallete';
import { View, Text } from 'react-native';
import { H1, Icon } from 'native-base';
import { meetingName } from '../../config/project.config.js';
import styles from './styles.js';
// import Hr from 'react-native-hr';
import StatusIcon from './components/StatusIcon.js'
import BackgroundTimer from 'react-native-background-timer';
import GetStatusMessage from '../../constants/StatusMessage.js';
import NetworkControls from './components/NetworkControls/NetworkControls.js';

class Broadcasting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.status !== nextProps.status ||
      this.state !== nextState)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.status !== nextProps.status) {
      if (nextProps.status == playerStatus.CONNECTIONOFF || nextProps.status == playerStatus.STOPPED) {
        this.setState({ currentTime: 0 })
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // only if status changed
    if (this.props.status !== prevProps.status) {
      // on playing start - start timer
      if (this.props.status == playerStatus.PLAYING) {
        this.timer = BackgroundTimer.setInterval(this.updateTimerState, 1000);
      } else {
        //if paused or error throw stop 
        BackgroundTimer.clearInterval(this.timer)
      }
    }
  }

  updateTimerState = () => {
    this.setState({ currentTime: this.state.currentTime + 1 })
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
            {/* <Hr lineColor={textColor} text={GetStatusMessage(this.props.status)} /> */}
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