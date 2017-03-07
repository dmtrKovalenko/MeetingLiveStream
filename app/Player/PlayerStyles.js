import { StyleSheet } from 'react-native'
import { primaryColor } from '../config/androidColorPallete'

const buttonWidth = 65;

export default {
    card: {
        marginTop:40,
        marginLeft:0,
        marginRight: 0,
        marginBottom: 0,
        paddingTop: 0,
        flex: 1,
        elevation: 3,
    },
    cardItem: {
        paddingLeft: 40,
        paddingRight: 40,
        overflow: 'visible'
    },
    actionButton: {
        padding: 0,
        margin: 0
    },
    icon: {
        justifyContent: 'center',
        fontSize: 23,
        color: 'rgba(0, 0, 0, 0.541176)'
    },
    playButton: {
        Container: {
            width: buttonWidth,
            height: buttonWidth,
            borderRadius: 50,
            position: 'absolute',
            bottom: 30
        },
        Button: {
            backgroundColor: primaryColor, 
            width: buttonWidth,
            height: buttonWidth, 
            borderRadius: 50, 
            paddingLeft: 25, 
            paddingTop: 17
        },
        Icon: {
            margin: 0,
            color: 'white',
            fontSize: 30
        }
    }
}