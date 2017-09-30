import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'native-base';
import { View, Text, TouchableWithoutFeedback, ToastAndroid } from 'react-native';

import styles from './NetworkControlsStyles';

const NetworkControls = ({ currentTime, bitrate, show }) => {
  const traffic = ((currentTime * bitrate) / 1024).toFixed(1);

  return show ?
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => ToastAndroid.show('Битрейт', ToastAndroid.SHORT)}>
        <Card style={styles.card}>
          <Text style={styles.text}> { bitrate } kb/s </Text>
        </Card>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => ToastAndroid.show('Трафик текущей трансляции', ToastAndroid.SHORT)}>
        <Card style={styles.card}>
          <Text style={styles.text}> { traffic } mb </Text>
        </Card>
      </TouchableWithoutFeedback>
    </View>
    : <View style={styles.fillMargin} />;
};

NetworkControls.propTypes = {
  bitrate: PropTypes.number,
  currentTime: PropTypes.number,
  show: PropTypes.bool,
};

export default NetworkControls;
