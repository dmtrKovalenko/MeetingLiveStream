import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './NetworkControlsStyles';

const NetworkControls = ({ currentTime, bitrate }) => {
  const traffic = ((currentTime * bitrate) / 1024).toFixed(1);

  return (
    <View style={styles.container}>
      <Text style={styles.additionalText}>
        { bitrate } kb/s
      </Text>

      <Text style={styles.separator}> | </Text>

      <Text style={styles.additionalText}>
        { traffic } mb
      </Text>
    </View>
  );
};

NetworkControls.propTypes = {
  bitrate: PropTypes.number,
  currentTime: PropTypes.number,
};

export default NetworkControls;
