import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import { TouchableNativeFeedback, View } from 'react-native';

import styles from './IconButtonStyles';
import { nativeRippleColor } from '../../config/androidColorPallete';

const IconButton = props => (
  <View style={props.style}>
    <TouchableNativeFeedback
      onPress={props.onPress}
      background={nativeRippleColor}
    >
      <View style={styles.iconContainer}>
        <Icon
          name={props.name}
          style={{ ...styles.icon, fontSize: props.size || 25 }}
        />
      </View>
    </TouchableNativeFeedback>
  </View>
);

IconButton.propTypes = {
  size: PropTypes.number,
  style: PropTypes.shape({ }),
  onPress: PropTypes.func,
  name: PropTypes.string,
};

export default IconButton;
