import * as playerStatus from '../../constants/PlayerStatuses.js';
import React, { Component } from 'react';
import { formatSS } from '../../utils/TimeHelper';
import { accentColor } from '../../config/androidColorPallete';
import { View, Text } from 'react-native';
import { H1, Icon, Spinner  } from 'native-base';
import { meetingName } from '../../config/project.config.js';
import styles from './styles.js';
import Hr from 'react-native-hr';
import StatusIcon from './components/StatusIcon.js'
import GetStatusMessage from '../../constants/StatusMessage.js';
import NetworkControls from './components/NetworkControls/NetworkControls.js';

class Broadcasting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime : 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.status !== nextProps.status ||
      this.state !== nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    //only if status changed
    if (this.props.status !== prevProps.status) {
      if (this.props.status == playerStatus.PLAYING) {
        this.timer = setInterval(() => this.setState({currentTime: this.state.currentTime + 1}), 1000)
      } else {
        clearInterval(this.timer)
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <StatusIcon status={this.props.status}/>
        </View>

        <View style={styles.titleContainer}>
          <H1 style={styles.title}> 
             { meetingName }
          </H1>

          <View style={styles.lineContainer}>
            <Hr lineColor={'rgba(0, 0, 0, 0.541176)'} text={GetStatusMessage(this.props.status)}/>
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