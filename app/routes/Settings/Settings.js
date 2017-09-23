import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text, Body, Right, Switch } from 'native-base';
import styles from './styles';

export default class SettingsPage extends Component {
  static propTypes = {
  }

  shouldComponentUpdate = (nextProps, nextState) => true

  render() {
    return (
      <List>
        <ListItem style={styles.item}>
          <Body style={styles.item}>
            <Text> Автовоспроизведение </Text>
            <Text style={styles.note} note> Воспроизводить сразу после подключения </Text>
          </Body>
          <Right style={styles.item}>
            <Switch value={false} />
          </Right>
        </ListItem>
        <ListItem style={styles.item}>
          <Body style={styles.item}>
            <Text>Airplane Mode</Text>
          </Body>
          <Right style={styles.item}>
            <Switch value={false} />
          </Right>
        </ListItem>
        <ListItem style={styles.item}>
          <Body style={styles.item}>
            <Text>Airplane Mode</Text>
          </Body>
          <Right style={styles.item}>
            <Switch value={false} />
          </Right>
        </ListItem>
        <ListItem style={styles.item}>
          <Body style={styles.item}>
            <Text>Airplane Mode</Text>
          </Body>
          <Right style={styles.item}>
            <Switch value={false} />
          </Right>
        </ListItem>
      </List>
    );
  }
}
