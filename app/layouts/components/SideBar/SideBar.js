import React, { Component } from 'react';
import styles from './SideBarStyles.js';
import IconButton from '../../../components/IconButton/IconButton.js';
import sideBarBackground from '../../../assets/sidebar-background.jpg';
import TouchableListItem from '../../../components/TouchebleListItem/TouchableListItem.js';
import { nativeRippleColor } from '../../../config/androidColorPallete.js';
import { webSiteUrl, appVersion } from '../../../config/project.config.js';
import { ListItem, Text, H3, Left, Icon, Body } from 'native-base';
import { View, Image, TouchableNativeFeedback, Alert, Linking } from 'react-native';

const showAboutAlert = () => {
    Alert.alert(
        'О приложении',
        `Это приложение разрабатывается и поддерживается для прослушивания трансляции определенного канала вещания. Если вы загрузили это приложение по ошибке, можете просто удалить его. Приносим извинения за предоставленные неудобства`
    )
}

const SideBar = props => {
    return (
        <View style={styles.container}>
            <Image source={sideBarBackground} style={styles.image}>
                <Text style={styles.appName}>
                    Трансляция Собрания
                </Text>
                <Text style={styles.version}> 
                    v{appVersion} 
                </Text>
            </Image>

            <View style={styles.list}>
                <TouchableListItem onPress={props.close} primary
                    iconName='headset' 
                    text='Cлушать трансляцию' />

                 <TouchableListItem onPress={() => Linking.openURL(webSiteUrl)}
                    iconName='browsers'
                    text='Открыть веб-сайт' />
                
                 <TouchableListItem 
                    iconName='chatbubbles'
                    text='Оставить отзыв' />
            </View>

            <View style={styles.helpButton}>
                <TouchableListItem onPress={showAboutAlert}
                    iconName='help'
                    text='О приложении' />
            </View>
        </View> )
}

export default SideBar;