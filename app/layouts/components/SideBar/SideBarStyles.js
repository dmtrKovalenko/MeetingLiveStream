import { Dimensions, PixelRatio } from 'react-native';
import { accentColor } from '../../../config/androidColorPallete.js';
const deviceHeight = Dimensions.get('window').height;

const imageOverlayPosition = {
   position: 'absolute',
   top: ( deviceHeight / 4) + 10,
}

export default {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
    },
    imageOverlay: {
        ...imageOverlayPosition,
        left: 15,
        color: 'white',
        fontSize: 18
    },
    version: {
        ...imageOverlayPosition,
        right: 15,
        color: 'white',
        fontSize: 17
    },
    list: {
        marginTop: 20,
        flex: 2,
        paddingRight: 15,
    },
    textPrimary: {
        color: accentColor,
    },
    helpButton: {
        position: 'absolute',
        bottom: 7, 
        right: 7
    }
}