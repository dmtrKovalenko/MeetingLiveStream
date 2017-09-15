import { accentColor } from '../../config/androidColorPallete';

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
  },
  image: {
    flex: 1.7,
    alignItems: 'flex-end',
    resizeMode: 'cover',
    flexDirection: 'row',
    padding: 10,
    width: null,
    height: null,
  },
  appName: {
    color: 'white',
    fontSize: 18,
    width: 190,
  },
  version: {
    width: 90,
    color: 'white',
    fontSize: 18,
    textAlign: 'right',
  },
  list: {
    marginTop: 10,
    flex: 3,
  },
  textPrimary: {
    color: accentColor,
  },
  helpButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
};
