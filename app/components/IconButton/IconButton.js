import React from 'react';
import styles from './IconButtonStyles.js';
import { Icon } from 'native-base';
import { nativeRippleColor } from '../../config/androidColorPallete.js';
import { TouchableNativeFeedback, View } from 'react-native'

const IconButton = props => (
    <View style={props.style}>
       <TouchableNativeFeedback onPress={props.onPress}
          background={nativeRippleColor}>
            <View style={styles.iconContainer}>
                <Icon name={props.name} style={styles.icon}/>
            </View>
        </TouchableNativeFeedback> 
    </View>);

export default IconButton;