import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback } from 'react-native';

const ActionButton = props => (
  <View style={{ ...props.containerStyle, elevation: 5 }}>
    <TouchableNativeFeedback
      onPress={props.onPress}
      background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.011176', true)}
    >
      <View style={{ ...props.style }}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  </View>
);

ActionButton.propTypes = {
  containerStyle: PropTypes.object,
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ActionButton;
