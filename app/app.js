import React, { Component } from 'react';
import RNAudioStreamer from 'react-native-audio-streamer';
import { DeviceEventEmitter, NetInfo } from 'react-native';

import Player from './Player/Player';
import CoreLayout from './layouts/CoreLayout';
import Broadcasting from './routes/Broadcasting/index';

import * as playerStatus from './constants/PlayerStatuses';
import { debounce } from './utils/CommonFunctions';
import { remoteStreamUrl } from './config/project.config';

class App extends Component {
  state = {
    errorMessage: null,
    currentTime: null,
    status: null,
  }

  componentDidMount() {
    RNAudioStreamer.setUrl(remoteStreamUrl);
    this.subscription = DeviceEventEmitter.addListener('RNAudioStreamerStatusChanged', this.debouncedStatusChanged);
  }

  statusChanged = (status) => {
    this.setState({ status });

    if (status === playerStatus.ERROR || status === playerStatus.STOPPED) {
      this.checkConnection();
    }
  }

  debouncedStatusChanged = debounce(this.statusChanged, 500);

  checkConnection = () => {
    NetInfo.isConnected.fetch().then((isConnected) => {
      if (!isConnected) {
        this.setState({ status: playerStatus.CONNECTIONOFF });
      }
    });
  }

  refreshStream = () => {
    // reset the url to reconnect to current stream instance
    RNAudioStreamer.setUrl(remoteStreamUrl);
    RNAudioStreamer.play();
  }

  render() {
    const footer = (
      <Player
        play={RNAudioStreamer.play}
        pause={RNAudioStreamer.pause}
        refresh={this.refreshStream}
      />
    );

    return (
      <CoreLayout footerComponent={footer}>
        <Broadcasting status={this.state.status} />
      </CoreLayout>
    );
  }
}

export default App;
