import { Platform, Dimensions, PixelRatio } from 'react-native';
import { textColor } from '../../config/androidColorPallete'
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const linePadding = 20;

export default {
    container: {
        flex: 1,
        flexDirection: 'column',
        height: deviceHeight - 200,
        width: deviceWidth,
        justifyContent : 'space-between',
        alignItems: 'center'
    },
    iconContainer: {
        flex: 2.7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon : {
        marginTop: -10,
        fontSize: 43,
        color: textColor,
    },
    titleContainer: {
        flex: 1.5,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: textColor,
        lineHeight: 40
    },
    lineContainer: {
        marginTop: 5,
        marginBottom: 50,
        paddingLeft: linePadding,
        paddingRight: linePadding,
        width: deviceWidth
    },
    timeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 0
    },
    timeCounter: {
        fontSize: 40
    },
    additionalsContainer: {
        flex: 0.4,
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: deviceHeight / 15,
        alignItems: 'flex-start'
    },
    additionalText: {
        fontSize: 19,
    },
    separator: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5,
        marginRight: 5
    }
}