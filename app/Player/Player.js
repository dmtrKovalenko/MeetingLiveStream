import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { Card, CardItem, Body, Button, Left, Icon } from 'native-base';
import styles from './PlayerStyles.js';

class Player extends Component {
    render() {
      return (
        <Card style={styles.card}>
            <CardItem >
                <Left>
                    <Button transparent>
                        <Icon name='play'/>
                    </Button>
                </Left>
                <Body>
                    <Text >1 Tyt controls </Text>
                </Body>
            </CardItem> 
        </Card>
      )
  }
} 

export default Player;