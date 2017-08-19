import { highlightColor } from '../../config/androidColorPallete'

export default {
  listItem: {
    paddingHorizontal: 0,
    marginLeft: 0
  },
  selected: {
    backgroundColor: highlightColor
  },
  rippleListItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    marginRight: -20
  },
  text: {
    fontSize: 16,
  },
  listBody: {
    flex: 9
  },
  listIcon: {
    flex: 1
  }
}
