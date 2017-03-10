import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import platform from '../../native-base-theme/variables/platform.js';
import getTheme from '../../native-base-theme/components';
import SideBar from './components/SideBar/SideBar.js';
import { 
    Container, Header, Title, Content, 
    Footer, Button, Left, Right, 
    Body, Icon, StyleProvider, Drawer } from 'native-base';

const deviceWidth = Dimensions.get('window').width;
const drawerOffset = deviceWidth - 300;
console.log(drawerOffset);

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
            <Drawer ref={(ref) => { this._drawer = ref; }}
              type='overlay'
              panOpenMask={0.2}
              content={<SideBar close={this.closeDrawer}/>}
              onClose={this.closeDrawer}
              elevation={10}
              openDrawerOffset={drawerOffset}
              tweenHandler={(ratio) => ({ main: { opacity:(2 - ratio) / 2 }})}>

                <Container>
                    <Header>
                        <Left style={{flex: 0.3}}>
                            <Button transparent
                              onPress={this.openDrawer}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{marginLeft:0}}> Трансляция </Title>
                        </Body>
                        <Right />
                    </Header>

                    <Content style={{flex:1, flexDirection: 'column'}}>
                        <Body>
                            {this.props.children}
                        </Body>
                    </Content>

                    <Footer>
                        {this.props.footerComponent}
                    </Footer>
                </Container>
             </Drawer>
          </StyleProvider>
        );
    }
}

export default CoreLayout