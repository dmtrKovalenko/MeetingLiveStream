import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import CoreLayout from './app/layouts/CoreLayout';
import App from './app/app.js';

export default class MeetingStream extends Component {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent('MeetingStream', () => MeetingStream);