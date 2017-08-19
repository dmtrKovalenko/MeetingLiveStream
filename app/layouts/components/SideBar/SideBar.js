import React, { Component } from 'react';
import styles from './SideBarStyles.js';
import IconButton from '../../../components/IconButton/IconButton.js';
import sideBarBackground from '../../../assets/sidebar-background.jpg';
import TouchableListItem from '../../../components/TouchebleListItem/TouchableListItem.js';

import { nativeRippleColor } from '../../../config/androidColorPallete.js';
import { version } from '../../../../package.json';
import { webSiteUrl, appDescription } from '../../../config/project.config.js';
import { ListItem, Text, H3, Left, Icon, Body } from 'native-base';
import { View, Image, TouchableNativeFeedback, Alert, Linking } from 'react-native';

const showAboutAlert = () => Alert.alert('О приложении', appDescription)

const SideBar = props => {
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
        <TouchableListItem selected
          text='Cлушать трансляцию'
          onPress={props.close}
          iconName='headset'
        />

        <TouchableListItem text='Открыть веб-сайт'
          onPress={() => Linking.openURL(webSiteUrl)}
          iconName='browsers'
        />

        <TouchableListItem
          text='Оставить отзыв'
          iconName='chatbubbles'
        />
      </View>

      <View style={styles.helpButton}>
        <TouchableListItem
          text='О приложении'
          onPress={showAboutAlert}
          iconName='help'
        />
      </View>
    </View>
  )
}

export default SideBar;
