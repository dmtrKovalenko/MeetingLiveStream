import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { H1, Icon, Spinner  } from 'native-base';
import { accentColor } from '../../config/androidColorPallete';
import styles from './styles.js';
import Hr from 'react-native-hr';
import StatusIcon from './components/StatusIcon.js'
import GetStatusMessage from '../../constants/StatusMessage.js';

class Broadcasting extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.status !== nextProps.status
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <StatusIcon status={this.props.status}/>
        </View>

        <View style={styles.titleContainer}>
          <H1 style={styles.title}> 
            Сосновая Горка 
          </H1>

          <View style={styles.lineContainer}>
            <Hr lineColor={'rgba(0, 0, 0, 0.541176)'} text={GetStatusMessage(this.props.status)}/>
          </View>
        </View>

        <View style={styles.timeContainer}>
            <Text style={styles.timeCounter}> 
              00:00
            </Text>
        </View>

        <View style={styles.additionalsContainer}>
            <Text style={{...styles.additionalText}}> 
              16 kb/s
            </Text>
             <Text style={styles.separator}> 
              |
            </Text>
             <Text style={styles.additionalText}> 
              0.11 mb
            </Text>
        </View>
      </View>
    );
  }
}

export default Broadcasting;