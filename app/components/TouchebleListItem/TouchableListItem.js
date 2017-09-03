import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Left, Icon, Body } from 'native-base';
import { TouchableNativeFeedback, View, Text } from 'react-native';

import styles from './TouchableListItemStyles';
import { accentColor, textColor, nativeRippleColor } from './../../config/androidColorPallete';

const TouchableListItem = (props) => {
  const color = props.selected ? accentColor : textColor;
  const containerStyle = props.selected
    ? [styles.listItem, styles.selected]
    : styles.listItem;

  return (
    <ListItem style={containerStyle}>
      <TouchableNativeFeedback
        background={nativeRippleColor}
        onPress={props.onPress}
      >
        <View style={[styles.rippleListItem]}>
          <Left style={styles.listIcon}>
            <Icon name={props.iconName} style={{ color }} />
          </Left>

          <Body style={styles.listBody}>
            <Text style={{ ...styles.text, color }}>
              {props.text}
            </Text>
          </Body>
        </View>
      </TouchableNativeFeedback>
    </ListItem>
  );
};

TouchableListItem.propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string,
  text: PropTypes.string,
  selected: PropTypes.bool,
};

export default TouchableListItem;
