import React from 'react';
import { Text, List } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { View, Image, Alert, Linking } from 'react-native';

import styles from './SideBarStyles';
import { version } from '../../../package.json';
import { webSiteUrl, appDescription } from '../../config/project.config';
import sideBarBackground from '../../assets/sidebar-background.jpg';
import TouchableListItem from '../../components/TouchebleListItem/TouchableListItem';

const showAboutAlert = () => Alert.alert('О приложении', appDescription);

const SideBar = (props) => {
  const isSelected = key => props.activeItemKey === key;
  console.log(props);
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
          iconName="browsers"
        />

        <TouchableListItem
          text="Оставить отзыв"
          iconName="chatbubbles"
          onPress={Actions.settings}
        />
      </View>

      <View style={styles.helpButton}>
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

export default SideBar;
