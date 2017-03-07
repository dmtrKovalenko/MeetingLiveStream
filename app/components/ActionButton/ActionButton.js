import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

const ActionButton = props => {
    return (
        <View style={{...props.containerStyle, elevation: 5}}>
            <TouchableNativeFeedback onPress={props.onPress}
                background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.011176', true)}>
                <View style={{...props.style, }}>
                   {props.children}
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default ActionButton;