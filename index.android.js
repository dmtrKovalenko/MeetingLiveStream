import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/Root';

const MeetingStream = () => <App />;

AppRegistry.registerComponent('MeetingStream', () => MeetingStream);

export default MeetingStream;
