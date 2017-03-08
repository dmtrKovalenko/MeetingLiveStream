import React, { Component } from 'react';
import { View, Image, TouchableNativeFeedback } from 'react-native';
import styles from './SideBarStyles.js';
import sideBarBackground from '../../../assets/sidebar-background.jpg';
import { ListItem, Text, H3 } from 'native-base';
import { nativeRippleColor } from '../../../config/androidColorPallete.js';

const SideBar = props => {
    return ( 
        <View style={styles.container}>
            <Image source={sideBarBackground} style={styles.image}/>
            <H3 style={styles.imageOverlay}>
                 Трансляция Собрания 
            </H3>

            <View style={styles.list}>
                <ListItem>
                    <TouchableNativeFeedback background={nativeRippleColor}>
                        <View style={styles.rippleListItem}>
                            <Text>Открыть веб-сайт</Text>
                        </View>
                    </TouchableNativeFeedback>
                </ListItem>
                <ListItem>
                    <Text>Оставить отзыв</Text>
                </ListItem>
            </View>
        </View>
    )
}

export default SideBar;