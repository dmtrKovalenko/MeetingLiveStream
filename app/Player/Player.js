import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CardItem, Left, Right, Icon } from 'native-base';

import styles from './PlayerStyles';
import IconButton from '../components/IconButton/IconButton';
import ActionButton from '../components/ActionButton/ActionButton';

class Player extends Component {
  static propTypes = {
    play: PropTypes.func,
    pause: PropTypes.func,
    refresh: PropTypes.func,
  }

  state = {
    isPaused: true,
  }

  playPause = () => {
    this.setState({ isPaused: !this.state.isPaused });

    this.state.isPaused
      ? this.props.play()
      : this.props.pause();
  }

  refresh = () => {
    this.setState({ isPaused: false });
    this.props.refresh();
  }

  render() {
    const icon = this.state.isPaused
      ? <Icon name="play" style={{ ...styles.playButton.Icon, ...styles.playButton.PlayIcon }} />
      : <Icon name="pause" style={styles.playButton.Icon} />;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Left>
              <IconButton name="refresh" onPress={this.refresh} />
            </Left>
            <Right>
              <IconButton name="volume-up" />
            </Right>
          </CardItem>
        </View>

        <ActionButton
          style={styles.playButton.Button}
          containerStyle={styles.playButton.Container}
          onPress={this.playPause}
        >
          {icon}
        </ActionButton>
      </View>
    );
  }
}

export default Player;
