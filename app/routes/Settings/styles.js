import { primaryColor } from '../../config/androidColorPallete';

export default {
  list: {
    marginTop: 10,
  },
  sectionTitle: {
    marginLeft: 10,
    fontSize: 13,
    color: primaryColor,
  },
  item: {
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 0,
  },
  itemInner: {
    flex: 9,
  },
  itemSwitch: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  note: {
    fontSize: 12,
    textAlign: 'left',
    includeFontPadding: false,
  },
  picker: {
    flex: 3.5,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    marginRight: -10,
    marginBottom: 8,
  },
  pickerItem: {
    marginTop: -20,
    alignItems: 'center',
  },
};
