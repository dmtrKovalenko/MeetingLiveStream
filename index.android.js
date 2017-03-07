import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import CoreLayout from './app/layouts/CoreLayout';
import { Player } from 'react-native-audio-streaming';
import Broadcasting from './app/routes/Broadcasting/index.js';

export default class MeetingStream extends Component {
  render() {
    return (
      <CoreLayout>
          <Broadcasting />
      </CoreLayout>
    );
  }
}

AppRegistry.registerComponent('MeetingStream', () => MeetingStream);