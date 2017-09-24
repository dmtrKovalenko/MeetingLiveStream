import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Right } from 'native-base';

import styles from '../styles';
import { primaryColor } from '../../../config/androidColorPallete';
import SettingsItem from './SettingsListItem';

const SettingsListItem = (props) => {
  const { onChange, value, settingsKey, ...other } = props;
  const toggleValue = () => onChange(settingsKey, !value);

  return (
    <SettingsItem onPress={toggleValue} {...other}>
      <Right style={styles.itemSwitch}>
        <Switch
          value={props.value}
          onChange={toggleValue}
        />
      </Right>
    </SettingsItem>
  );
};

SettingsListItem.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.bool,
  settingsKey: PropTypes.string,
};

export default SettingsListItem;
