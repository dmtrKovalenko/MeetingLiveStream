import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Body, Text } from 'native-base';

import styles from '../styles';

const SettingsListItem = props => (
  <ListItem
    style={[styles.item, props.style]}
    onPress={props.onPress}
    noBorder
  >
    <Body style={styles.itemInner}>
      <Text numberOfLines={1} ellipsizeMode="tail">
        { props.title }
      </Text>
      <Text style={styles.note} note>
        { props.subtitle }
      </Text>
    </Body>

    { props.children }
  </ListItem>
);

SettingsListItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: PropTypes.shape({

  }),
};

export default SettingsListItem;
