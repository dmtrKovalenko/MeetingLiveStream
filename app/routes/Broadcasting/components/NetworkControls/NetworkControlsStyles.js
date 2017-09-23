import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 0.5,
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: deviceHeight / 15,
    alignItems: 'flex-start',
  },
  card: {
    flex: 2,
    maxWidth: 95,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 19,
  },
  separator: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
    marginRight: 5,
  },
};
