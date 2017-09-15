import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { StatusBar, View, Platform } from 'react-native';
import { Header, Left, Button, Icon, Title, Body } from 'native-base';
import { primaryColor } from '../../config/androidColorPallete';

const styles = {
  statusBarClearFix: {
    height: 20,
    backgroundColor: primaryColor,
  },
  navBarLeft: {
    flex: 0.1,
  },
  navBarTitle: {
    marginLeft: 0,
  },
};

const Navbar = props => (
  <View>
    {
      Platform.OS === 'android' && Platform.Version >= 20 &&
        <View style={styles.statusBarClearFix} />
    }

    <Header>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0.24)"
        animated
      />

      <Left style={styles.navBarLeft}>
        <Button transparent onPress={Actions.drawerOpen}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title style={styles.navBarTitle}> { props.title } </Title>
      </Body>
    </Header>
  </View>
);

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
