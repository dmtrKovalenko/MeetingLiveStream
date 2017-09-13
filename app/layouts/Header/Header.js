import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Button, Icon, Title, Body } from 'native-base';

const Navbar = () => (
  <Header>
    <Left style={{ flex: 0.1 }}>
      <Button transparent onPress={this.openDrawer}>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title style={{ marginLeft: 0 }}> Трансляция </Title>
    </Body>
  </Header>
);

Header.propTypes = {

};

export default Navbar;
