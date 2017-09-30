import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { H1 } from 'native-base';
import { View, Text } from 'react-native';

import styles from './styles';
import { meetingName } from '../../config/project.config';
import { formatSS } from '../../utils/TimeHelper';
import StatusIcon from './components/StatusIcon';
import StatusMessage from './components/StatusMessage';
import NetworkControls from './components/NetworkControls/NetworkControls';
import Player from '../../Player/PlayerContainer';

class Broadcasting extends Component {
  static propTypes = {
    status: PropTypes.string,
    bitrate: PropTypes.number,
    checkBitrate: PropTypes.func,
    currentTime: PropTypes.number,
    connectionStatus: PropTypes.string,
    isAllowedToStream: PropTypes.func,
    settings: PropTypes.shape({
      autoplay: PropTypes.bool,
      mobileConnection: PropTypes.bool,
      autoreconnect: PropTypes.bool,
      reconnectTimeout: PropTypes.number,
      showNotifications: PropTypes.bool,
      trafficControl: PropTypes.bool,
    }),
  }

  componentDidMount = () => {
    this.props.checkBitrate();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.status !== nextProps.status ||
      this.props.currentTime !== nextProps.currentTime ||
      this.state !== nextState
    );
  }

  render() {
    return (
      <View style={styles.broadcastingPage}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <StatusIcon
              status={this.props.status}
              connectionStatus={this.props.connectionStatus}
              isAllowedToStream={this.props.isAllowedToStream()}
            />
          </View>

          <View style={styles.titleContainer}>
            <H1 style={styles.title}>
              {meetingName}
            </H1>

            <StatusMessage
              status={this.props.status}
              connectionStatus={this.props.connectionStatus}
              isAllowedToStream={this.props.isAllowedToStream()}
            />
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.timeCounter}>
              {formatSS(this.props.currentTime)}
            </Text>
          </View>

          <NetworkControls
            bitrate={this.props.bitrate}
            currentTime={this.props.currentTime}
            show={this.props.settings.trafficControl}
          />
        </View>

        <Player />
      </View>
    );
  }
}

export default Broadcasting;
