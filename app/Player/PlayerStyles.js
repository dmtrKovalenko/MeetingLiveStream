import { primaryColor, accentColor, textColor } from '../config/androidColorPallete';

const buttonWidth = 70;

export default {
  container: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    elevation: 4,
    borderTopColor: '#808080',
    borderTopWidth: 0.1,
  },
  cardItem: {
    paddingLeft: 40,
    paddingRight: 40,
    overflow: 'visible',
  },
  actionButton: {
    padding: 0,
    margin: 0,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    fontSize: 25,
    color: textColor,
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
      paddingLeft: 24,
      paddingTop: 18,
    },
    Icon: {
      margin: 0,
      color: 'white',
      fontSize: 33,
    },
    PlayIcon: {
      marginLeft: 3,
    },
  },
};
