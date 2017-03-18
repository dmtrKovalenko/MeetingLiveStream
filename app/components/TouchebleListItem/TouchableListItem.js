import React from 'react';
import styles from './TouchableListItemStyles.js';
import { nativeRippleColor } from '../../config/androidColorPallete.js';
import { accentColor, textColor } from './../../config/androidColorPallete.js';
import { ListItem, Left, Icon, Body } from 'native-base';
import { TouchableNativeFeedback, View, Text } from 'react-native';

const TouchableListItem = props => {
    const color = props.primary ? accentColor : textColor;
    
    return (
       <ListItem style={{...styles.listItem, ...props.style}}>
            <TouchableNativeFeedback background={nativeRippleColor}
                onPress={props.onPress}>

                <View style={[styles.rippleListItem]}>
                    <Left style={styles.listIcon}>
                        <Icon name={ props.iconName } style={{color: color}} />
                    </Left>

                    <Body style={styles.listBody}>
                        <Text style={{...styles.text, color: color}}>
                             { props.text }
                        </Text>
                    </Body>
                </View>
            </TouchableNativeFeedback>
        </ListItem>
    );
};

export default TouchableListItem;