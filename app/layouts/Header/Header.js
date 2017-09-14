import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Header, Left, Button, Icon, Title, Body } from 'native-base';

const Navbar = props => (
  <Header>
    <Left style={{ flex: 0.1 }}>
      <Button transparent onPress={Actions.drawerOpen}>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title style={{ marginLeft: 0 }}> { props.title } </Title>
    </Body>
  </Header>
);

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
