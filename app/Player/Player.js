import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Body, Button, Left, Right, Icon, Footer } from 'native-base';
import styles from './PlayerStyles.js';
import ActionButton from '../components/ActionButton/ActionButton.js';

class Player extends Component {
    constructor(props){
        super(props);

        this.state = {
            isPaused : true,
        }
    }

    playPause = () => {
        this.setState({isPaused: !this.state.isPaused});
        
        this.state.isPaused ? this.props.play() : this.props.pause();
    }
    
    render() {
    const icon = this.state.isPaused 
        ? <Icon name='play' style={styles.playButton.Icon}/>
        : <Icon name='pause' style={styles.playButton.Icon}/>

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
                style={styles.playButton.Button}
                onPress={this.playPause}>
                {icon}
            </ActionButton>
        </View> )
    }
} 

export default Player;