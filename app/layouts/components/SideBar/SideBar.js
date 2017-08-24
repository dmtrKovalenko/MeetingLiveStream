import React from 'react';
import { Text } from 'native-base';
import { View, Image, Alert, Linking } from 'react-native';

import styles from './SideBarStyles.js';
import sideBarBackground from '../../../assets/sidebar-background.jpg';
import TouchableListItem from '../../../components/TouchebleListItem/TouchableListItem';

import { version } from '../../../../package.json';
import { webSiteUrl, appDescription } from '../../../config/project.config.js';

const showAboutAlert = () => Alert.alert('О приложении', appDescription);

const SideBar = props => (
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
        selected
        text="Cлушать трансляцию"
        onPress={props.close}
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
      />
    </View>

    <View style={styles.helpButton}>
      <TouchableListItem
        text="О приложении"
        onPress={showAboutAlert}
        iconName="help"
      />
    </View>
  </View>
);

export default SideBar;
