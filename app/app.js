import React, { Component } from 'react';
import { View, Text, DeviceEventEmitter, NetInfo } from 'react-native';
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
         duration: null,
         status: null
      }
  }

  componentDidMount() {
    RNAudioStreamer.setUrl('https://cpa.ds.npr.org/kplu/audio/2017/02/eric_verlinde_trio_01.mp3')

    RNAudioStreamer.duration((err, duration) => this.setState({duration: duration}))
    this.subscription = DeviceEventEmitter.addListener('RNAudioStreamerStatusChanged', this.statusChanged)
  }

  statusChanged = (status, err) => {
    console.log(status)
    this.setState({status: status})

    if (status == playerStatus.ERROR) {
       this.checkConnection();
    }
  }

  checkConnection = () => {
     NetInfo.isConnected.fetch().then(isConnected => {
         this.setState({status: playerStatus.CONNECTIONOFF})
     });
  }
  
  render() {
    const player = <Player play={RNAudioStreamer.play} pause={RNAudioStreamer.pause} />

    return (
      <CoreLayout footerComponent={player}>
          <Broadcasting duration={this.state.duration} 
            errorMessage={this.state.errorMessage}
            status={this.state.status} />
      </CoreLayout>
    );
  }
}

export default App;