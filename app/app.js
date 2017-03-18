import React, { Component } from 'react';
import { View, Text, DeviceEventEmitter, NetInfo } from 'react-native';
import { debounce } from './utils/CommonFunctions.js'
import { remoteStreamUrl } from './config/project.config.js'
import CoreLayout from './layouts/CoreLayout';
import Broadcasting from './routes/Broadcasting/index.js';
import RNAudioStreamer from 'react-native-audio-streamer';
import Player from './Player/Player.js';
import * as playerStatus from './constants/PlayerStatuses.js';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
         errorMessage: null,
         currentTime: null,
         status: null
      }

      this.debuncedStatusChanged = debounce(this.statusChanged, 500);
  }

  componentDidMount() {
    RNAudioStreamer.setUrl(remoteStreamUrl)
    this.subscription = DeviceEventEmitter.addListener('RNAudioStreamerStatusChanged', this.debuncedStatusChanged)
  }

  statusChanged = (status, err) => {
    this.setState({status: status})

    if (status == playerStatus.ERROR || status == playerStatus.STOPPED ) {
       this.checkConnection();
    }
  }

  checkConnection = () => {
     NetInfo.isConnected.fetch().then(isConnected => {
       if(!isConnected) {
         this.setState({status: playerStatus.CONNECTIONOFF})
       }
     });
  }

  refreshStream = () => {
    //reset the url to reconnect to current stream instance
    RNAudioStreamer.setUrl(remoteStreamUrl);
    RNAudioStreamer.play();
  }
  
  render() {
    const player = <Player play={RNAudioStreamer.play} pause={RNAudioStreamer.pause} refresh={this.refreshStream} />

    return (
      <CoreLayout footerComponent={player}>
          <Broadcasting status={this.state.status} />
      </CoreLayout>
    );
  }
}

export default App;