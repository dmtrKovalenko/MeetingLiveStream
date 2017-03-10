import React, { Component } from 'react';
import styles from './SideBarStyles.js';
import IconButton from '../../../components/IconButton/IconButton.js';
import { webSiteUrl } from '../../../config/project.config.js';
import sideBarBackground from '../../../assets/sidebar-background.jpg';
import TouchableListItem from '../../../components/TouchebleListItem/TouchableListItem.js';
import { nativeRippleColor } from '../../../config/androidColorPallete.js';
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
            <Image source={sideBarBackground} style={styles.image}/>
            <H3 style={styles.imageOverlay}>
                Трансляция Собрания 
            </H3>

            <Text style={styles.version}>
                v0.1
            </Text>

            <View style={styles.list}>
                <TouchableListItem onPress={props.close}
                    primary
                    iconName='headset' 
                    text='Cлушать трансляцию' />

                 <TouchableListItem onPress={() => Linking.openURL(webSiteUrl)}
                    iconName='browsers'
                    text='Открыть веб-сайт' />
                
                 <TouchableListItem 
                    iconName='chatbubbles'
                    text='Оставить отзыв' />
            </View>

            <IconButton name='help' 
                size={23}
                style={styles.helpButton}
                onPress={showAboutAlert} />
        </View> )
}

export default SideBar;