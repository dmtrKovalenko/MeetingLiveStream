import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Body, Button, Left, Right, Icon, Footer } from 'native-base';
import styles from './PlayerStyles.js';
import ActionButton from '../components/ActionButton/ActionButton.js';

class Player extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.card}>
                <CardItem style={styles.cardItem}>
                    <Left>
                        <Button style={styles.actionButton} transparent>
                            <Icon name='refresh' style={styles.icon}/>
                        </Button>
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                        <Button style={styles.actionButton} transparent>
                            <Icon name='volume-up' style={styles.icon}/>
                        </Button>
                    </Right>
                </CardItem> 
            </View>
            <ActionButton containerStyle={styles.playButton.Container}
                style={styles.playButton.Button} >
                <Icon name='play' style={styles.playButton.Icon}/>
            </ActionButton>
        </View> )
  }
} 

export default Player;