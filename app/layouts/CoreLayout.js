import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import platform from '../../native-base-theme/variables/platform.js';
import getTheme from '../../native-base-theme/components';
import SideBar from './components/SideBar/SideBar.js';
import {
  Container, Header, Title, Content,
  Footer, Button, Left, Right,
  Body, Icon, StyleProvider, Drawer
} from 'native-base';

const deviceWidth = Dimensions.get('window').width;
const drawerOffset = deviceWidth - 300;

class CoreLayout extends Component {
  closeDrawer = () => {
    this._drawer._root.close()
  };

  openDrawer = () => {
    this._drawer._root.open()
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Drawer
          type="overlay"
          panOpenMask={0.80}
          captureGestures="open"
          ref={ref => (this._drawer = ref)}
          content={<SideBar close={this.closeDrawer} />}
          onClose={this.closeDrawer}
          openDrawerOffset={drawerOffset}
        >
          <Container>
            <Header>
              <Left style={{ flex: 0.3 }}>
                <Button transparent onPress={this.openDrawer}>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title style={{ marginLeft: 0 }}> Трансляция </Title>
              </Body>
              <Right />
            </Header>

            <Content>
              <Body>
                {this.props.children}
              </Body>
            </Content>
          </Container>

         { this.props.footerComponent}
        </Drawer>
      </StyleProvider>
    );
  }
}

export default CoreLayout