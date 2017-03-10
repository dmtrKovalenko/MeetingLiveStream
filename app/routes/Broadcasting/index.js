import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { H1, Icon } from 'native-base';
import styles from './styles.js';
import Hr from 'react-native-hr';

class Broadcasting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}> 
          <Icon name='ios-radio-outline' style={styles.icon}/>
        </View>

        <View style={styles.titleContainer}>
          <H1 style={styles.title}> 
            Сосновая Горка 
          </H1>

          <View style={styles.lineContainer}>
            <Hr lineColor={'rgba(0, 0, 0, 0.541176)'} text='Трансляция недоступна'/>
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