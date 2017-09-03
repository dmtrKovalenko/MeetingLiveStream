import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, StyleProvider, Drawer } from 'native-base';

import Player from '../Player/PlayerContainer';
import SideBar from './components/SideBar/SideBar';
import platform from '../../native-base-theme/variables/platform';
import getTheme from '../../native-base-theme/components';

const deviceWidth = Dimensions.get('window').width;
const drawerOffset = deviceWidth - 300;

class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  }

  /* eslint-disable no-underscore-dangle */
  closeDrawer = () => this.drawer._root.close();

  openDrawer = () => this.drawer._root.open();

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Drawer
          type="overlay"
          panOpenMask={0.80}
          captureGestures="open"
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar close={this.closeDrawer} />}
          onClose={this.closeDrawer}
          openDrawerOffset={drawerOffset}
        >
          <Container>
            <Header>
              <Left style={{ flex: 0.3 }}>
                <Button transparent onPress={this.openDrawer}>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title style={{ marginLeft: 0 }}> Трансляция </Title>
              </Body>
              <Right />
            </Header>

            <Content>
              <Body>
                { this.props.children }
              </Body>
            </Content>
          </Container>

          <Player />
        </Drawer>
      </StyleProvider>
    );
  }
}

export default CoreLayout;
