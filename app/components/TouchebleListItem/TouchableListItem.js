import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Left, Icon, Body } from 'native-base';
import { TouchableNativeFeedback, View, Text } from 'react-native';

import styles from './TouchableListItemStyles';

const TouchableListItem = (props) => {
  const textStyle = props.selected
    ? [styles.text, styles.selectedColor]
    : styles.text;

  const iconStyle = props.selected
    ? [styles.icon, styles.selectedColor]
    : styles.icon;

  const containerStyle = props.selected
    ? [styles.listItem, styles.selected]
    : styles.listItem;

  return (
    <ListItem style={containerStyle} noBorder={props.noBorder}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={[styles.rippleListItem]}>
          <View style={styles.listIcon}>
            <Icon name={props.iconName} style={iconStyle} />
          </View>

          <Body style={styles.listBody}>
            <Text style={textStyle}>
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
  noBorder: PropTypes.bool,
};

TouchableListItem.defaultProps = {
  noBorder: true,
};

export default TouchableListItem;
