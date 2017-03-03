import { Player } from 'react-native-audio-streaming';
import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';

class PlayerControls extends Component {
    render() {
      console.log(Player)
      return (
          <View > 
           <Text> Tyt controls </Text>
          </View> 
      )
  }
} 

export default PlayerControls;