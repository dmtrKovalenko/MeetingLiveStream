import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'native-base';
import { View, Text, TouchableWithoutFeedback, ToastAndroid } from 'react-native';

import styles from './NetworkControlsStyles';

const NetworkControls = ({ currentTime, bitrate }) => {
  const traffic = ((currentTime * bitrate) / 1024).toFixed(1);

  return (
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
  );
};

NetworkControls.propTypes = {
  bitrate: PropTypes.number,
  currentTime: PropTypes.number,
};

export default NetworkControls;
