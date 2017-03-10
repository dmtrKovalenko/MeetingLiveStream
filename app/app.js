import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import CoreLayout from './layouts/CoreLayout';
import Broadcasting from './routes/Broadcasting/index.js';
import RNAudioStreamer from 'react-native-audio-streamer';
import Player from './Player/Player.js';

export default class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
         errorMessage: null,
         duration: null,
      }
  }

  componentDidMount() {
    RNAudioStreamer.setUrl('http://lacavewebradio.chickenkiller.com:8000/stream.mp3')

    RNAudioStreamer.duration((err, duration)=> this.setState({duration: duration}))
    RNAudioStreamer.status((err, status)=>{
        if (err) {
            this.setState({errorMessage: err})
        }
    })
  }
  
  render() {
    const player = <Player play={RNAudioStreamer.play} pause={RNAudioStreamer.pause} />

    return (
      <CoreLayout footerComponent={player}>
          <Broadcasting duration={this.state.duration} 
            errorMessage={this.state.errorMessage}   />
      </CoreLayout>
    );
  }
}

AppRegistry.registerComponent('MeetingStream', () => MeetingStream);