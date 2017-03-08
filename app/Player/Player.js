import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableNativeFeedback} from 'react-native';
import { Card, CardItem, Body, Button, Left, Right, Icon, Footer } from 'native-base';
import { nativeRippleColor } from '../config/androidColorPallete.js';
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

    refresh = () => {
        this.setState({isPaused: false});
        this.props.refresh();
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
                        <TouchableNativeFeedback onPress={this.refresh}
                          background={nativeRippleColor}>
                            <View style={styles.iconContainer}>
                                <Icon name='refresh' style={styles.icon}/>
                            </View>
                        </TouchableNativeFeedback>
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                        <TouchableNativeFeedback 
                          background={nativeRippleColor}>
                            <View style={styles.iconContainer}>
                                <Icon name='volume-up' style={styles.icon}/>
                            </View>
                        </TouchableNativeFeedback>
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