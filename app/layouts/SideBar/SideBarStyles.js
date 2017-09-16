import { accentColor } from '../../config/androidColorPallete';

const drawerWidth = 304;
const imageHeight = (drawerWidth * 9 / 16) + 20;

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
  },
  image: {
    height: imageHeight,
    width: drawerWidth,
    alignItems: 'flex-end',
    resizeMode: 'cover',
    flexDirection: 'row',
    padding: 10,
  },
  appName: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
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
  divider: {
    marginLeft: 0,
    marginRight: 0,
    marginVertical: 8,
  },
  dividerLine: {
    height: 0.2,
    backgroundColor: 'rgba(0,0,0,14)',
  },
  textPrimary: {
    color: accentColor,
  },
  helpButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
};
