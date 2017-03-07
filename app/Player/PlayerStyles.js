import { StyleSheet } from 'react-native'
import { primaryColor, textColor } from '../config/androidColorPallete.js'

const buttonWidth = 70;

export default {
    container: {
        flex:1, 
        flexDirection:'row',  
        justifyContent: 'center', 
        alignItems: 'center'
    },
    card: {
        marginTop:40,
        marginLeft:0,
        marginRight: 0,
        marginBottom: 0,
        paddingTop: 0,
        flex: 1,
        elevation: 3,
        borderTopColor: '#ccc',
        borderTopWidth: 0.1
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
        fontSize: 25,
        color: textColor
    },
    playButton: {
        Container: {
            width: buttonWidth,
            height: buttonWidth,
            borderRadius: 50,
            position: 'absolute',
            bottom: 30,
        },
        Button: {
            backgroundColor: primaryColor, 
            width: buttonWidth,
            height: buttonWidth, 
            borderRadius: 50, 
            paddingLeft: 27, 
            paddingTop: 17
        },
        Icon: {
            margin: 0,
            color: 'white',
            fontSize: 33
        }
    }
}