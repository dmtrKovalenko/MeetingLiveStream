import { Dimensions, PixelRatio } from 'react-native';

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
    }
}