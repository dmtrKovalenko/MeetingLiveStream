import { highlightColor, accentColor, textColor, titleColor } from '../../config/androidColorPallete';

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
    paddingLeft: 16,
    marginRight: -16,
    height: 48,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: titleColor,
  },
  listBody: {
    flex: 8,
  },
  listIcon: {
    width: 40,
    padding: 0,
  },
  icon: {
    fontSize: 22,
    color: textColor,
  },
  selectedColor: {
    color: accentColor,
  },
};
