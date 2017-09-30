import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RNAudioStreamer from 'react-native-audio-streamer';
import { View, DeviceEventEmitter } from 'react-native';
import { CardItem, Left, Right, Icon } from 'native-base';

import styles from './PlayerStyles';
import IconButton from '../components/IconButton/IconButton';
import ActionButton from '../components/ActionButton/ActionButton';
import autoReconnect from '../utils/autoReconnect';
import { remoteStreamUrl } from '../config/project.config';

class Player extends Component {
  static propTypes = {
    isPlaying: PropTypes.bool,
    toAutoReconnect: PropTypes.bool,
    reconnectTimeout: PropTypes.number,
    changeStatus: PropTypes.func.isRequired,
    status: PropTypes.string,
    autoplay: PropTypes.bool,
  }

  componentDidMount() {
    if (!this.props.status) {
      RNAudioStreamer.setUrl(remoteStreamUrl);

      if (this.props.autoplay) {
        RNAudioStreamer.play();
      }
    }

    this.subscription = DeviceEventEmitter.addListener(
      'RNAudioStreamerStatusChanged',
      this.onStatusChanged,
    );
  }

  componentWillUnmount = () => {
    this.subscription.remove();
  }

  onStatusChanged = (status) => {
    this.props.changeStatus(status);
    if (this.props.toAutoReconnect) {
      // if failed set timeout and reconnect each ${reconnectTimeout} seconds
      autoReconnect(status, this.refresh, this.props.reconnectTimeout);
    }
  }

  refresh = () => {
    // reset the url to reconnect to current stream instance
    RNAudioStreamer.setUrl(remoteStreamUrl);
    RNAudioStreamer.play();
  }

  playPause = () => {
    this.props.isPlaying
      ? RNAudioStreamer.pause()
      : RNAudioStreamer.play();
  }

  render() {
    const icon = this.props.isPlaying
      ? <Icon name="pause" style={styles.playButton.Icon} />
      : <Icon name="play" style={{ ...styles.playButton.Icon, ...styles.playButton.PlayIcon }} />;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Left>
              <IconButton name="refresh" onPress={this.refresh} />
            </Left>
            <Right>
              <IconButton name="volume-up" />
            </Right>
          </CardItem>
        </View>

        <ActionButton
          style={styles.playButton.Button}
          containerStyle={styles.playButton.Container}
          onPress={this.playPause}
        >
          {icon}
        </ActionButton>
      </View>
    );
  }
}

export default Player;
