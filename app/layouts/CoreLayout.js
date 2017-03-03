import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider } from 'native-base';
import { Text, ScrollView } from 'react-native';
import platform from '../../native-base-theme/variables/platform.js';
import getTheme from '../../native-base-theme/components';
import Player from '../Player/Player.js';

class CoreLayout extends Component {
    render() {
        return (
          <StyleProvider style={getTheme(platform)}>
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Трансляция </Title>
                    </Body>
                    <Right />
                </Header>

                <Content style={{flex:1, flexDirection: 'column'}}>
                    <Body>
                        {this.props.children}
                    </Body>
                </Content>

                <Footer>
                    <Player />
                </Footer>
            </Container>
          </StyleProvider>
        );
    }
}

export default CoreLayout