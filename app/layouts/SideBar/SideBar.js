import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Image, Alert, Linking, Text } from 'react-native';

import styles from './SideBarStyles';
import { version } from '../../../package.json';
import { webSiteUrl, appDescription } from '../../config/project.config';
import HR from '../../components/HR';
import sideBarBackground from '../../assets/sidebar-background.jpg';
import TouchableListItem from '../../components/TouchebleListItem/TouchableListItem';

const showAboutAlert = () => Alert.alert('О приложении', appDescription);

const SideBar = (props) => {
  const isSelected = key => props.activeItemKey === key;

  return (
    <View style={styles.container}>
      <Image source={sideBarBackground} style={styles.image}>
        <Text style={styles.appName}>
        Трансляция Собрания
        </Text>
        <Text style={styles.version}>
          {version}
        </Text>
      </Image>

      <View style={styles.list}>
        <TouchableListItem
          selected={isSelected('broadcasting')}
          text="Cлушать трансляцию"
          onPress={Actions.broadcasting}
          iconName="headset"
        />

        <TouchableListItem
          text="Открыть веб-сайт"
          onPress={() => Linking.openURL(webSiteUrl)}
          iconName="globe"
        />

        <TouchableListItem
          text="Оставить отзыв"
          iconName="chatbubbles"
          onPress={Actions.settings}
        />

        <HR style={styles.divider} lineStyle={styles.dividerLine} />

        <TouchableListItem
          selected={isSelected('settings')}
          text="Настройки"
          iconName="settings"
          onPress={Actions.settings}
        />

        <TouchableListItem
          text="О приложении"
          onPress={showAboutAlert}
          iconName="help"
        />
      </View>
    </View>
  );
};

SideBar.propTypes = {
  activeItemKey: PropTypes.string,
};

export default SideBar;
