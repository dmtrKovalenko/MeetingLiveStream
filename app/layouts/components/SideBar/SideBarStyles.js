import { Dimensions, PixelRatio } from 'react-native';
import { accentColor } from '../../../config/androidColorPallete.js';
const deviceHeight = Dimensions.get('window').height;

const imageOverlayPosition = {
   position: 'absolute',
   top: ( deviceHeight * 0.625) + 10,
}

export default {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 0,
    },
    image: {
        flex: 3,
        alignItems: 'flex-end',
        resizeMode: 'cover',
        flexDirection: 'row',
        padding: 10,
        width: null,
        height: null
    },
    appName: {
        color: 'white',
        fontSize: 18,
        width: 190
    },
    version: {
        width: 90,
        color: 'white',
        fontSize: 18,
        textAlign: 'right'
    },
    list: {
        marginTop: 10,
        flex: 4,
    },
    textPrimary: {
        color: accentColor,
    },
    helpButton: {
        flex: 1,
        justifyContent: 'flex-end'
    }
}