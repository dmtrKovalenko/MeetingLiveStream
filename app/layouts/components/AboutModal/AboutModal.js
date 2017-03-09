import React from 'react';
import { Text, Modal } from 'react-native';

const AboutModal = props => {
    return (
        <Modal visible={props.isOpen}
          animationType='fade '
          transparent={true}
          onRequestClose={props.closeModal}>
            <Text> Ahhh you touch my tralalala </Text>
        </Modal>
    );
};

export default AboutModal;