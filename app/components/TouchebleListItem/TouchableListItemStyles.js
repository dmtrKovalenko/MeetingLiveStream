import { highlightColor } from '../../config/androidColorPallete';

export default {
  listItem: {
    padding: 0,
    marginLeft: 0,
    height: 48,
  },
  selected: {
    backgroundColor: highlightColor,
  },
  rippleListItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    marginRight: -20,
    height: 48,
  },
  text: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  listBody: {
    flex: 8,
  },
  listIcon: {
    flex: 1.5,
    padding: 0,
  },
};
