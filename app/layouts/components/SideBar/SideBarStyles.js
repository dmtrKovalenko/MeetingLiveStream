import { Dimensions, PixelRatio } from 'react-native';
import { accentColor } from '../../../config/androidColorPallete.js';
const deviceHeight = Dimensions.get('window').height;

export default {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
    },
    imageOverlay: {
        position: 'absolute',
        top: ( deviceHeight / 4) + 10,
        left: 15,
        color: 'white',
        fontSize: 16
    },
    list: {
        marginTop: 20,
        flex: 2,
        paddingRight: 15,
    },
    listItem: {
        paddingRight: 0
    },
    rippleListItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: -4, //fix rounding of item
        paddingLeft: 4
    },
    textPrimary: {
        color: accentColor,
    },
    helpButton: {
        position: 'absolute',
        bottom: 10, 
        right: 10
    }
}