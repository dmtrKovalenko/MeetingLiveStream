import { createAction } from 'redux-actions';
import { AsyncStorage } from 'react-native';
import * as types from '../actionTypes';
import defaultSettings from '../config/defaultUserSettings';

const key = '@@Settings';

export const setSettings = createAction(types.SET_SETTINGS);

const saveSettings = async (newEntry) => {
  const settings = JSON.parse(await AsyncStorage.getItem(key));

  const updated = { ...settings, newEntry };
  AsyncStorage.setItem(JSON.stringify(updated));
};

export const setSettingItem = (name, value) => {
  const entry = { [name]: value };
  saveSettings(entry);

  return entry;
};

export const rehydrateSettings = () => async (dispatch) => {
  let settings = await AsyncStorage.getItem(key);
  settings = { ...defaultSettings, ...settings };

  dispatch(setSettings(settings));
};

