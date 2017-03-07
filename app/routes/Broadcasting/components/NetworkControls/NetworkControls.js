import React from 'react';
import { View, Text } from 'react-native';
import styles from './NetworkControlsStyles.js';
import { streamBitrate } from '../../../../config/project.config.js';

const NetworkControls = ({currentTime}) => {
    const traffic = ((currentTime * streamBitrate) / 1024).toFixed(1)
    return (
        <View style={styles.container}>
            <Text style={styles.additionalText}> 
              { streamBitrate } kb/s
            </Text>
             <Text style={styles.separator}> 
              |
            </Text>
             <Text style={styles.additionalText}> 
              {traffic} mb
            </Text>
        </View>
    );
};

export default NetworkControls;