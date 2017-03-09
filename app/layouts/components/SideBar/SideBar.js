import React, { Component } from 'react';
import styles from './SideBarStyles.js';
import AboutModal from '../AboutModal/AboutModal.js';
import IconButton from '../../../components/IconButton/IconButton.js';
import sideBarBackground from '../../../assets/sidebar-background.jpg';
import { nativeRippleColor } from '../../../config/androidColorPallete.js';
import { ListItem, Text, H3 } from 'native-base';
import { View, Image, TouchableNativeFeedback } from 'react-native';

class SideBar extends Component {
    constructor (props) {
        super(props);

        this.state = { 
            isAboutAppModalOpen : false
        }
    }

    openAboutAppModal = () => this.setState({isAboutAppModalOpen: true})
    
    closeAboutAppModal = () => this.setState({isAboutAppModalOpen: false})

    render() {
        return ( 
            <View style={styles.container}>
                <Image source={sideBarBackground} style={styles.image}/>
                <H3 style={styles.imageOverlay}>
                    Трансляция Собрания 
                </H3>

                <View style={styles.list}>
                    <ListItem style={styles.listItem}>
                        <TouchableNativeFeedback background={nativeRippleColor}>
                            <View style={styles.rippleListItem}>
                                <Text style={styles.textPrimary}>
                                    Слушать трансляцию
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </ListItem>
                    <ListItem style={styles.listItem}>
                        <TouchableNativeFeedback background={nativeRippleColor}>
                            <View style={styles.rippleListItem}>
                                <Text>Открыть веб-сайт</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </ListItem>
                    <ListItem style={styles.listItem}>
                            <TouchableNativeFeedback background={nativeRippleColor}>
                            <View style={styles.rippleListItem}>
                                <Text>Оставить отзыв</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </ListItem>
                </View>

                <IconButton name='help' 
                    style={styles.helpButton}
                    onPress={this.openAboutAppModal} />
                <AboutModal isOpen={this.state.isAboutAppModalOpen} 
                    closeModal={this.closeAboutAppModal}/> 
            </View>
        )
    }
}

export default SideBar;