import { createAction } from 'redux-actions';
import { AsyncStorage } from 'react-native';
import * as types from '../actionTypes';
import defaultSettings from '../config/defaultUserSettings';

const settingsStorageKey = '@@Settings';

export const setSettings = createAction(types.SET_SETTINGS);

const saveSettings = async (newEntry) => {
  const settings = JSON.parse(await AsyncStorage.getItem(settingsStorageKey));

  const updated = { ...settings, ...newEntry };
  AsyncStorage.setItem(settingsStorageKey, JSON.stringify(updated));
};

export const setSettingItem = (key, value) => {
  const entry = { [key]: value };
  saveSettings(entry);

  return setSettings(entry);
};

export const rehydrateSettings = () => async (dispatch) => {
  let settings = JSON.parse(await AsyncStorage.getItem(settingsStorageKey));
  settings = { ...defaultSettings, ...settings };

  dispatch(setSettings(settings));
};

